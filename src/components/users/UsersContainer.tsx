import { AppRootReducerType } from "../../redux/store";
import { connect } from "react-redux";
import { changePage, changePageTC, getUsersTC } from "../../redux/usersReducer";
import React from "react";
import { userType } from "../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../common/preloader/Preloader";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";

type UsersProps = {
  items: userType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
  getUsersTC: (currentPage: number, pageSize: number) => void;
  changePageTC: (page: number, pageSize: number) => void;
};

export class ContainerComponent extends React.Component<UsersProps> {
  componentDidMount(): void {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onClickChangePage = (page: number) => {
    this.props.changePageTC(page, this.props.pageSize);
  };

  render() {
    let pageCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const pages: number[] = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onClickChangePage={this.onClickChangePage}
          items={this.props.items}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppRootReducerType) => {
  return {
    items: state.userReducer.items,
    pageSize: state.userReducer.pageSize,
    totalUsersCount: state.userReducer.totalUsersCount,
    currentPage: state.userReducer.currentPage,
    isFetching: state.userReducer.isFetching,
    followingInProgress: state.profilePage.followingInProgress,
  };
};

export const UsersContainer = compose<React.ComponentType>(connect(mapStateToProps, { getUsersTC, changePageTC }))(
  ContainerComponent
);

// export const UsersContainer = connect(mapStateToProps,
//    { changePage, getUsersTC, changePageTC })(ContainerComponent)
//connect(пропсы для компоненты, функции dispatch в пропсах)
//функции dispatch это автоматически созданный callBack а не ActionCreator:  .... follow => dispatch(follow(..,..))
