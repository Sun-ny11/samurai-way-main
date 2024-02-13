import { AppRootReducerType } from "../../redux/store";
import { connect } from "react-redux";
import { changePage, follow, setUsers, toggleIsFetching, totalCount, unFollow } from "../../redux/usersReducer";
import React from "react"
import { userType } from "../../redux/usersReducer"
import { Users } from "./Users";
import { Preloader } from "../common/preloader/Preloader";
import { userApi } from "../../api/api";

type UsersProps = {
   follow: (usersId: number) => void
   unFollow: (usersId: number) => void
   setUsers: (users: any) => void
   items: userType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   changePage: (page: number) => void
   totalCount: (count: number) => void
   toggleIsFetching: (status: boolean) => void
   isFetching: boolean
}

export class ContainerComponent extends React.Component<UsersProps> {

   componentDidMount(): void {
      this.props.toggleIsFetching(true)
      userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(data.items)
         this.props.totalCount(data.totalCount)
      })
   }//без {withCredentials:true} запрос тоже вернет пользователей но по умолчанию followed:false, т.к. не получит куку


   onClickChangePage = (page: number) => {
      this.props.toggleIsFetching(true)
      this.props.changePage(page)
      userApi.changePage(page, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(data.items)
      })
   }


   render() {

      let padeCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

      const pages: number[] = [];

      for (let i = 1; i <= padeCount; i++) {
         pages.push(i)
      }

      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users onClickChangePage={this.onClickChangePage}
            pages={pages}
            currentPage={this.props.currentPage}
            items={this.props.items}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
         />
      </>
   }
}



const mapStateToProps = (state: AppRootReducerType) => {
   return {
      items: state.userReducer.items,
      pageSize: state.userReducer.pageSize,
      totalUsersCount: state.userReducer.totalUsersCount,
      currentPage: state.userReducer.currentPage,
      isFetching: state.userReducer.isFetching
   }
}

export const UsersContainer = connect(mapStateToProps, { follow, unFollow, setUsers, changePage, totalCount, toggleIsFetching })(ContainerComponent)
//connect(пропсы для компоненты, функции dispatch в пропсах)
//функции dispatch это автоматически созданный callBack а не ActionCreator:  .... follow => dispatch(follow(..,..))