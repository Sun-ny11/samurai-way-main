import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";


export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <ul >
            <li className={s.item}><NavLink  activeClassName={s.active} to="/profile">Profile</NavLink></li>
            <li className={s.item}><NavLink activeClassName={s.active} to="/messages">Messages</NavLink></li>
            <li className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
            <li className={s.item}><NavLink activeClassName={s.active} to="/musics">Musics</NavLink></li>
            <li className={s.item}><NavLink activeClassName={s.active} to="/friends">Friends</NavLink></li>
            <li className={s.item}><NavLink activeClassName={s.active} to="/users">Users</NavLink></li>
         </ul>
      </nav>
   );
};