import React, { FC } from "react";
import { userType } from "../../redux/usersReducer";
import s from "./users.module.css";
import axios from 'axios';
import defaultImg from './../../assets/images/defaultImg.jpg'



type UsersProps = {
   follow: (usersId: number) => void
   unFollow: (usersId: number) => void
   setUsers: (users: any) => void
   users: userType[]
}

export const Users = (props: UsersProps) => {

   // { id: 1, avatarURL: "https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png", followed: true, fullName: "Stanislav", status: "Am a boss", location: { city: "SPB", country: "Russia" } },
   // { id: 2, avatarURL: "https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png", followed: false, fullName: "Oleg", status: "Am a boss too", location: { city: "Moscow", country: "Russia" } },
   // { id: 3, avatarURL: "https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png", followed: true, fullName: "Andrey", status: "Am a boss too", location: { city: "SPB", country: "Russia" } },


   if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         props.setUsers(response.data.items)
      })

   }

   return (
      <div>
         {props.users.map(us => {
            return (
               <div key={us.id}>
                  <span>
                     <div><img src={us.photos.large !== null?us.photos.large:defaultImg} alt="av" className={s.userPhoto} /></div>
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
         })}

      </div>
   );
};