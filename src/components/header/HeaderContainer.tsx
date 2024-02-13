import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppRootReducerType } from "../../redux/store";
import { connect } from "react-redux";
import { setUserData } from "../../redux/auth-reducer";
import { authApi } from "../../api/api";

// type PathParamsType = {//ожидаемые параметры
//    userId: string,
// }

type mapStateToProps = {
   isAuth: boolean
   login: string
}

type mapDespatchToProps = {
   setUserData: (id: number, email: string, login: string) => void
}

type ownPropsType = mapDespatchToProps & mapStateToProps

// type ProfileProps = RouteComponentProps<PathParamsType> & ownPropsType



export class ContainerComponent extends React.Component<ownPropsType> {
   componentDidMount(): void {
      authApi.authMe()
         .then(data => {
            if (data.resultCode === 0) {
               const { id, email, login } = data.data
               this.props.setUserData(id, email, login)
            }
         })
      console.log(this.props);

   }
   render() {
      return (
         <Header {...this.props} />
      )
   }
}

// const ComponentWithUrl = withRouter(ContainerComponent)

const mapStateToProps = (state: AppRootReducerType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export const HeaderContainer = connect(mapStateToProps, { setUserData })(ContainerComponent)