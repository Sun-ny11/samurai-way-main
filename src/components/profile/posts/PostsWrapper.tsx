import React, { FC } from "react";
import { addTaskAC, updateTaskAC } from "../../../redux/state";
import { Posts } from "./Posts";
import { Dispatch } from "redux";
import { AppRootReducerType } from "../../../redux/store";
import { connect } from "react-redux";


const mapStateToProps = (state: AppRootReducerType) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      newPostBody: (body: string) => {
         dispatch(updateTaskAC(body))
      },
      sendPostOnClick: () => {
         dispatch(addTaskAC())
      },

   }
}


export const PostsWrapper = connect(mapStateToProps, mapDispatchToProps)(Posts)
