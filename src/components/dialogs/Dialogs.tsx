import React, { ChangeEvent, FC } from "react";
import s from './Dialogs.module.css'
import { Messages, NameUserMessage } from "./message/Messages";
import { massagesDataType, userDataType } from "../../redux/state";
import { Login } from "../login/Login";
import { Redirect } from "react-router-dom";


export type DialogsType = {
   massagesData: massagesDataType[]
   usersData: userDataType[]
   sendNewMessage: string


   updateNewMessageBody: (body: string) => void
   sendMesOnClick: () => void
   isAuth: boolean

}

export const Dialogs: FC<DialogsType> = ({ massagesData, usersData, sendNewMessage, updateNewMessageBody, sendMesOnClick, isAuth }) => {

   const onClickHandler = () => {
      sendMesOnClick()
   }

   const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      updateNewMessageBody(e.currentTarget.value)
   }


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
            <textarea value={sendNewMessage} onChange={onChangeMessageHandler}></textarea>
            <button onClick={onClickHandler}>Send</button>
         </div>

      </div>
   );
};