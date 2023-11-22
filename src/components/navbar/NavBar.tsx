import React from "react";
import s from './Navbar.module.css'


export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li ><a className={`${s.item} ${s.active}`} href="">Profile</a></li>
            <li><a href="">Messages</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Musics</a></li>
         </ul>
      </nav>
   );
};