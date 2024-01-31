import React, { FC } from "react"
import { AppRootReducerType } from "../../redux/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import { Users } from "./Users";


const mapStateToProps = (state: AppRootReducerType) => {
   return {
      users: state.userReducer.items
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      follow:(usersId:number) => {
         dispatch(followAC(usersId))
      },
      unFollow:(usersId:number) => {
         dispatch(unFollowAC(usersId))
      },
      setUsers:(users:any) => {
         dispatch(setUsersAC(users))
      }
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)