import React from "react";
import { AppRootReducerType } from "../../redux/store";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { goToProfileTC, responseProfileType } from "../../redux/post-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {//ожидаемые параметры
   userId: string,
}

type mapStateToProps = {
   profile: responseProfileType
}

type mapDespatchToProps = {
   goToProfileTC: (userId: number) => void
}

type ownPropsType = mapStateToProps & mapDespatchToProps

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

const ComponentWithUrl = withRouter(ContainerComponent)

const mapStateToProps = (state: AppRootReducerType) => {
   return {
      profile: state.profilePage.profile
   }
}

export const ProfileContainer = connect(mapStateToProps, { goToProfileTC })(ComponentWithUrl)