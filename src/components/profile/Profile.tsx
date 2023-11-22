import React from "react";
import s from './Profile.module.css'
import { Posts } from "./posts/Posts";


export const Profile = () => {
   return (
      <main className={s.content}>
         <div>
            <img src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg" alt="" />
         </div>
         <div>
            ava + desk
         </div>

         <Posts />
      </main>
   );
};