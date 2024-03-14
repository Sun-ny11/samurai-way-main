import React, { FC } from "react";
import s from './AvatarBlock.module.css'
import { responseProfileType } from "../../../redux/post-reducer";

type avatrBlockProps = {
   profile: responseProfileType

}
export const AvatarBlock: FC<avatrBlockProps> = ({ profile }) => {
   return (
      <>
         <div>
            <img src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg" alt="" />
         </div>
         <div>
            <img src={profile.photos.small} alt="ava" />
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
            <h2>looking For A Job: {profile.lookingForAJob?"Да":"Нет"}</h2>
            <p>Description: {profile.lookingForAJobDescription}</p>
            <hr />
            <div>fullName: {profile.fullName}</div>
            ava + desk
         </div>
      </>
   );
};