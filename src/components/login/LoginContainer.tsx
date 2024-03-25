import React from "react";
import { Login } from "./Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";
import { AppRootReducerType } from "../../redux/store";

const mapStateToProps = (state: AppRootReducerType) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export const LoginContainer = compose<React.ComponentType>(
   connect(mapStateToProps, { loginThunk })
)(Login) 