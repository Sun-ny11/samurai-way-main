import React, { FC } from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

type NameMessagePropsType = {
   name: string
   id: string
}
type MessagesPropsType = {
   mes: string
}

export const NameMessage: FC<NameMessagePropsType> = (props) => {
   return (
      <li className={s.item}><NavLink activeClassName={s.isActive} to={"/messages/" + props.id}>{props.name}</NavLink></li>
   );
};
export const Messages: FC<MessagesPropsType> = (props) => {
   return (
      <div>
            <p>{props.mes}</p>
         </div>
   );
};





export const Dialogs = () => {
   return (
      <div className={s.message}>
         <nav>
            <ul className={s.itemName}>
               <NameMessage name={"Dima"} id={"1"} />
               <NameMessage name={"Masha"} id={"2"} />
               <NameMessage name={"Petya"} id={"3"} />
               <NameMessage name={"Nastya"} id={"4"} />
               <NameMessage name={"Sasha"} id={"5"} />
            </ul>
         </nav>
         <Messages mes="Hi, how are you"/>
      </div>
   );
};