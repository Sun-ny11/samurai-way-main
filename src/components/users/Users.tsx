import React, { FC } from "react";
import { userType } from "../../redux/usersReducer";
import defaultImg from './../../assets/images/defaultImg.jpg'
import s from './users.module.css'
import { NavLink } from "react-router-dom";

type UsersProps = {
   onClickChangePage: (page: number) => void
   pages: number[]
   currentPage: number
   items: userType[]
   follow: (usersId: number) => void
   unFollow: (usersId: number) => void
}

export const Users: FC<UsersProps> = (props) => {
   return (
      <>
         <div>
            {props.pages.map((page) => {
               return (
                  <span key={page} onClick={() => props.onClickChangePage(page)} className={props.currentPage === page ? s.activePage : ""}>{page}</span>
               )
            })}
         </div >
         {
            props.items.map(us => {
               return (
                  <div key={us.id}>
                     <span>
                        <NavLink to={"/profile/" + us.id}>
                           <div><img src={us.photos.large !== null ? us.photos.large : defaultImg} alt="av" className={s.userPhoto} /></div>
                        </NavLink>
                        <div>
                           {/* 62 */}
                           {us.followed ? <button onClick={() => props.unFollow(us.id)}>Un follow</button>
                              : <button onClick={() => props.follow(us.id)}>follow</button>}
                        </div>
                     </span>
                     <span>
                        <div>{us.name}</div>
                        <div>{us.status}</div>
                     </span>
                     <span>
                        <div>{"us.location.country"}</div>
                        <div>{"us.location.city"}</div>
                     </span>
                  </div>
               )
            })
         }
      </>
   )
}
