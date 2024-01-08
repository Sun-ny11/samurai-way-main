import React, { FC } from "react";
import s from './Profile.module.css'
import { Posts } from "./posts/Posts";
import { AvatarBlock } from "./avatarBlock/Profile";
import {filterActionType, postDataType } from "../../redux/state";


type ProfileType = {
   postsData: postDataType[]
   newPostText:string
   dispatch:(action:filterActionType)=>void

  
}

export const Profile: FC<ProfileType> = ({ postsData,newPostText, dispatch}) => {
   return (
      <main className={s.content}>
         <AvatarBlock />
         <Posts postsData={postsData}  newPostText={newPostText} dispatch={dispatch}/>
      </main>
   );
};