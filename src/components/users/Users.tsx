import React from "react"
import { userType } from "../../redux/usersReducer"
import axios from 'axios';
import defaultImg from './../../assets/images/defaultImg.jpg'
import s from './users.module.css'

type UsersProps = {
   follow: (usersId: number) => void
   unFollow: (usersId: number) => void
   setUsers: (users: any) => void
   users: userType[]
}

export class Users extends React.Component<UsersProps> {
   constructor(props: UsersProps) {
      super(props)

      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items)
      })
   }

   render() {
      return<>
         {
            this.props.users.map(us => {
               return (
                  <div key={us.id}>
                     <span>
                        <div><img src={us.photos.large !== null ? us.photos.large : defaultImg} alt="av" className={s.userPhoto} /></div>
                        <div>
                           {us.followed ? <button onClick={() => this.props.unFollow(us.id)}>Un follow</button>
                              : <button onClick={() => this.props.follow(us.id)}>follow</button>}
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

   }
}
