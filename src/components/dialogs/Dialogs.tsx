import React, { FC } from "react";
import s from './Dialogs.module.css'
import { Messages, NameUserMessage } from "./message/Messages";
import { massagesDataType, userDataType } from "../..";


type DialogsType = {
   massagesData: massagesDataType[]
   usersData: userDataType[]
}

export const Dialogs: FC<DialogsType> = ({ massagesData, usersData }) => {
   return (
      <div className={s.message}>
         <nav>
            <ul className={s.itemName}>
               {usersData.map(el => {
                  return (
                     <NameUserMessage key={el.id} name={el.name} id={el.id} />
                  )
               })}
            </ul>
         </nav>
         {massagesData.map(el => {
            return (
               <div key={el.id} >
                  <Messages mes={el.message} />
               </div>
            )
         })}
      </div>
   );
};