import React, { FC } from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

type HeaderProps = {
   isAuth: boolean
   login: string

}


export const Header: FC<HeaderProps> = (props) => {
   
   return (
      <header className={s.header}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIc9OS9v7heyKbTw6uvxZ3Q3dYKUwet1140Q&usqp=CAU" alt="sswe" />
         <div >{props.isAuth?props.login:<NavLink className={s.loginBlock} to={"/login"}>Login</NavLink>}
            
         </div>
      </header>
   );
};