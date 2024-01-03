import { FC } from "react"
import { NavLink } from "react-router-dom"
import s from './../Dialogs.module.css'

type NameMessagePropsType = {
   name: string
   id: string
   avatar: string
}
type MessagesPropsType = {
   mes: string
   avatar?:string
}


export const NameUserMessage: FC<NameMessagePropsType> = (props) => {
   return (
      <div style={{display:"flex"}}>
         <img  src="" alt={props.avatar} />
         <li className={s.item}><NavLink activeClassName={s.isActive} to={"/messages/" + props.id}>{props.name}</NavLink></li>
         
      </div>
   );
};
export const Messages: FC<MessagesPropsType> = (props) => {
   return (
      <div>
         <img src="" alt={props.avatar} />
         <p>{props.mes}</p>
      </div>
   );
};
