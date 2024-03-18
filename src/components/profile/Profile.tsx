import React, { FC } from "react";
import s from './Profile.module.css'
import { AvatarBlock } from "./avatarBlock/AvatarBlock";
import { PostsWrapper } from "./posts/PostsWrapper";
import { responseProfileType } from "../../redux/post-reducer";
import { ProfileStatus } from "./posts/ProfileStatus";


type ProfileType = {
   profile: responseProfileType
   status: string
   updateUserStatus: (status: string) => void

}

export const Profile: FC<ProfileType> = ({ profile, status, updateUserStatus }) => {

   return (
      <main className={s.content}>
         {/* <AvatarBlock profile={profile}/> */}

         <div>
            <img src={profile.photos.small} alt="ava" />
            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
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