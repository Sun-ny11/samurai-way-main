import React, { FC } from "react";
import s from './Profile.module.css'
import { Posts } from "./posts/Posts";
import { AvatarBlock } from "./avatarBlock/Profile";
import { postDataType } from "../..";

type ProfileType = {
   postsData: postDataType[]
}

export const Profile: FC<ProfileType> = ({ postsData }) => {
   return (
      <main className={s.content}>
         <AvatarBlock />
         <Posts postsData={postsData} />
      </main>
   );
};