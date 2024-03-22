import React, { FC } from "react";
import s from './Dialogs.module.css'
import { Messages, NameUserMessage } from "./message/Messages";
import { massagesDataType, userDataType } from "../../redux/state";

import { DialogsForm } from "./DialogsForm";


export type DialogsType = {
   massagesData: massagesDataType[]
   usersData: userDataType[]
   sendNewMessage: string


   updateNewMessageBody: (body: string) => void
   sendMesOnClick: (message: string) => void
   isAuth: boolean

}

export const Dialogs: FC<DialogsType> = ({ massagesData, usersData, sendMesOnClick, isAuth }) => {

   return (
      <div className={s.message}>
         <nav>
            <ul className={s.itemName}>
               {usersData.map(el => {
                  return (
                     <NameUserMessage key={el.id} name={el.name} id={el.id} avatar={el.avatar} />
                  )
               })}
            </ul>

         </nav>
         <div>
            {massagesData.map(el => {
               return (
                  <div key={el.id} >
                     <Messages mes={el.message} />
                  </div>
               )
            })}
         </div>

         <div>

            <DialogsForm sendMesOnClick={sendMesOnClick} />
         </div>

      </div>
   );
};