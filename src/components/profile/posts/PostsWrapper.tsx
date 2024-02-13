import React, { FC } from "react";
import { Posts } from "./Posts";
import { Dispatch } from "redux";
import { AppRootReducerType } from "../../../redux/store";
import { connect } from "react-redux";
import { addPost, updatePost } from "../../../redux/post-reducer";


const mapStateToProps = (state: AppRootReducerType) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      newPostBody: (body: string) => {
         dispatch(updatePost(body))
      },
      sendPostOnClick: () => {
         dispatch(addPost())
      },

   }
}


export const PostsWrapper = connect(mapStateToProps, mapDispatchToProps)(Posts)
