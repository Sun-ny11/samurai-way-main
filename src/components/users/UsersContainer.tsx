import { AppRootReducerType } from "../../redux/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { changePageAC, followAC, setUsersAC, totalCountAC, unFollowAC } from "../../redux/usersReducer";
import React from "react"
import { userType } from "../../redux/usersReducer"
import axios from 'axios';
import { Users } from "./Users";

type UsersProps = {
   follow: (usersId: number) => void
   unFollow: (usersId: number) => void
   setUsers: (users: any) => void
   items: userType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   changePage: (page: number) => void
   changeUsersCount: (count: number) => void
}

export class ContainerComponent extends React.Component<UsersProps> {

   componentDidMount(): void {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.changeUsersCount(response.data.totalCount)
      })
   }


   onClickChangePage = (page: number) => {
      this.props.changePage(page)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }


   render() {

      let padeCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

      const pages: number[] = [];

      for (let i = 1; i <= padeCount; i++) {
         pages.push(i)
      }

      return <Users onClickChangePage={this.onClickChangePage}
         pages={pages}
         currentPage={this.props.currentPage}
         items={this.props.items}
         follow={this.props.follow}
         unFollow={this.props.unFollow}
      />
   }
}



const mapStateToProps = (state: AppRootReducerType) => {
   return {
      items: state.userReducer.items,
      pageSize: state.userReducer.pageSize,
      totalUsersCount: state.userReducer.totalUsersCount,
      currentPage: state.userReducer.currentPage
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      follow: (usersId: number) => {
         dispatch(followAC(usersId))
      },
      unFollow: (usersId: number) => {
         dispatch(unFollowAC(usersId))
      },
      setUsers: (users: any) => {
         dispatch(setUsersAC(users))
      },
      changePage: (page: number) => {
         dispatch(changePageAC(page))
      },
      changeUsersCount: (count: number) => {
         dispatch(totalCountAC(count))
      }
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(ContainerComponent)