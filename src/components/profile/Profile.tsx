import React, { FC } from "react";
import s from './Profile.module.css'
import { AvatarBlock } from "./avatarBlock/AvatarBlock";
import { PostsWrapper } from "./posts/PostsWrapper";
import { responseProfileType } from "../../redux/post-reducer";
import { ProfileStatus } from "./posts/ProfileStatus";


type ProfileType = {
   profile: responseProfileType
}

export const Profile: FC<ProfileType> = ({ profile }) => {
   return (
      <main className={s.content}>
         {/* <AvatarBlock profile={profile}/> */}

         <div>
            <img src={profile.photos.small} alt="ava" />
            <ProfileStatus status={"EEEq"} />
            <p>About me: {profile.aboutMe}</p>
            <hr />
            <div>
               Contacts:
               <p>{profile.contacts.facebook}</p>
               <p>{profile.contacts.github}</p>
               <p>{profile.contacts.instagram}</p>
               <p>{profile.contacts.mainLink}</p>
               <p>{profile.contacts.twitter}</p>
               <p>{profile.contacts.vk}</p>
               <p>{profile.contacts.website}</p>
               <p>{profile.contacts.youtube}</p>
            </div>
            <hr />
            <h2>looking For A Job: {profile.lookingForAJob ? "Да" : "Нет"}</h2>
            <p>Description: {profile.lookingForAJobDescription}</p>
            <hr />
            <div>fullName: {profile.fullName}</div>
            ava + desk
         </div>
         <PostsWrapper />
      </main>
   );
};