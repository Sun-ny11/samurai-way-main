import React from "react";
import s from './Profile.module.css'
import { Posts } from "./posts/Posts";
import { AvatarBlock } from "./avatarBlock/Profile";


export const Profile = () => {
   return (
      <main className={s.content}>
         <AvatarBlock/>
         <Posts />
      </main>
   );
};