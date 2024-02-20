import React from "react";
import { Header } from "./Header";
import { AppRootReducerType } from "../../redux/store";
import { connect } from "react-redux";
import { authorization } from "../../redux/auth-reducer";

// type PathParamsType = {//ожидаемые параметры
//    userId: string,
// }

type mapStateToProps = {
   isAuth: boolean
   login: string
}

type mapDespatchToProps = {
   authorization: () => void
}

type ownPropsType = mapDespatchToProps & mapStateToProps

// type ProfileProps = RouteComponentProps<PathParamsType> & ownPropsType



export class ContainerComponent extends React.Component<ownPropsType> {
   componentDidMount(): void {
      this.props.authorization()
   }
   render() {
      return (
         <Header {...this.props} />
      )
   }
}

// const ComponentWithUrl = withRouter(ContainerComponent)

const mapStateToProps = (state: AppRootReducerType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export const HeaderContainer = connect(mapStateToProps, { authorization })(ContainerComponent)