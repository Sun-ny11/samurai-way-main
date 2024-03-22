import React, { FC } from "react";
import { Posts } from "./Posts";
import { Dispatch } from "redux";
import { AppRootReducerType } from "../../../redux/store";
import { connect } from "react-redux";
import { addPost } from "../../../redux/post-reducer";


const mapStateToProps = (state: AppRootReducerType) => {
   return {
      postsData: state.profilePage.postsData,
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {

      sendPost: (text: string) => {
         dispatch(addPost(text))
      },

   }
}


export const PostsWrapper = connect(mapStateToProps, mapDispatchToProps)(Posts)
