import React from "react";
import { AppRootReducerType } from "../../redux/store";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { goToProfileTC, responseProfileType } from "../../redux/post-reducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {//ожидаемые параметры
   userId: string,
}

type mapStateToPropsType = {
   profile: responseProfileType
   isAuth: boolean
}

type mapDespatchToProps = {
   goToProfileTC: (userId: number) => void
}

type ownPropsType = mapStateToPropsType & mapDespatchToProps

type ProfileProps = RouteComponentProps<PathParamsType> & ownPropsType



export class ContainerComponent extends React.Component<ProfileProps> {
   componentDidMount(): void {
      let userId = this.props.match.params.userId
      if (!userId) {//если userId не указан в URLпараметре, (/profile)
         userId = "29113" //будет id личного профиля
      }
      this.props.goToProfileTC(+userId)

   }
   render() {
      return (
         <Profile {...this.props} />
      )
   }
}




const mapStateToProps = (state: AppRootReducerType): mapStateToPropsType => {
   return {
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth
   }
}
export const ProfileContainer = compose<React.ComponentType>(
   connect(mapStateToProps, { goToProfileTC }),
   withRouter,
   WithAuthRedirect
)(ContainerComponent)