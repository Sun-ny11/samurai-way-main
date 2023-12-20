import { FC } from "react"
import { NavLink } from "react-router-dom"
import s from './../Dialogs.module.css'

type NameMessagePropsType = {
   name: string
   id: string
}
type MessagesPropsType = {
   mes: string
}


export const NameUserMessage: FC<NameMessagePropsType> = (props) => {
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