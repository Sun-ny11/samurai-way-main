import React, { ChangeEvent, FC, RefObject } from "react";
import s from './Dialogs.module.css'
import { Messages, NameUserMessage } from "./message/Messages";
import { filterActionType, massagesDataType, sendMessageAC, updateMessageAC, userDataType } from "../../redux/state";


type DialogsType = {
   massagesData: massagesDataType[]
   usersData: userDataType[]
   sendNewMessage: string
   dispatch: (action: filterActionType) => void

}

export const Dialogs: FC<DialogsType> = ({ massagesData, usersData, sendNewMessage, dispatch }) => {
   debugger
   const onClickHandler = () => {
      dispatch(sendMessageAC())
   }

   const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateMessageAC(e.currentTarget.value))
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