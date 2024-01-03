import React, { FC, RefObject } from "react";
import s from './Dialogs.module.css'
import { Messages, NameUserMessage } from "./message/Messages";
import { massagesDataType, userDataType } from "../../redux/state";


type DialogsType = {
   massagesData: massagesDataType[]
   usersData: userDataType[]
}

export const Dialogs: FC<DialogsType> = ({ massagesData, usersData }) => {

   const newMessagesRef:RefObject<HTMLTextAreaElement> = React.createRef()

   const onClickHandler = ()=>{
      alert(newMessagesRef.current?.value)
   }

   return (
      <div className={s.message}>
         <nav>
            <ul className={s.itemName}>
               {usersData.map(el => {
                  return (
                     <NameUserMessage key={el.id} name={el.name} id={el.id} avatar={el.avatar}/>
                     
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
         
         <textarea ref = {newMessagesRef}></textarea>
         <button onClick={onClickHandler}>Send</button>
      </div>
   );
};