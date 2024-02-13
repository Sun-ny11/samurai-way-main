import React, { FC } from "react";
import s from './Profile.module.css'
import { AvatarBlock } from "./avatarBlock/Profile";
import { PostsWrapper } from "./posts/PostsWrapper";
import { responseProfileType } from "../../redux/post-reducer";


type ProfileType = {
   profile:responseProfileType
}

export const Profile: FC<ProfileType> = ({ profile}) => {
   return (
      <main className={s.content}>
         <AvatarBlock profile={profile}/>
         <PostsWrapper />
      </main>
   );
};