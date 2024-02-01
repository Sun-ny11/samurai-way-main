import React, { FC } from "react";
import { userType } from "../../redux/usersReducer";
import defaultImg from './../../assets/images/defaultImg.jpg'
import s from './users.module.css'

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
            {props.pages.map(page => {
               return (
                  <span onClick={() => props.onClickChangePage(page)} className={props.currentPage === page && s.activePage}>{page}</span>
               )
            })}
         </div>
         {
            props.items.map(us => {
               return (
                  <div key={us.id}>
                     <span>
                        <div><img src={us.photos.large !== null ? us.photos.large : defaultImg} alt="av" className={s.userPhoto} /></div>
                        <div>
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
