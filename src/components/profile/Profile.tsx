import React, { FC } from "react";
import s from './Profile.module.css'
import { AvatarBlock } from "./avatarBlock/Profile";
import { PostsWrapper } from "./posts/PostsWrapper";


type ProfileType = {
}

export const Profile: FC<ProfileType> = ({ }) => {
   return (
      <main className={s.content}>
         <AvatarBlock />
         <PostsWrapper />
      </main>
   );
};