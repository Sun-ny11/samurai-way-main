import React, { FC } from "react";
import s from './Profile.module.css'
import { Posts } from "./posts/Posts";
import { AvatarBlock } from "./avatarBlock/Profile";
import { postDataType } from "../../redux/state";


type ProfileType = {
   postsData: postDataType[]
   addPost:()=>void
   newPostText:string
   updateNewPostText:(i:string)=>void

}

export const Profile: FC<ProfileType> = ({ postsData,addPost,newPostText,updateNewPostText }) => {
   return (
      <main className={s.content}>
         <AvatarBlock />
         <Posts postsData={postsData} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
      </main>
   );
};