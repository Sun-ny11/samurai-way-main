import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { AppRootReducerType } from "../redux/store"
import { ComponentType } from "react"

type mapStateToPropsType = {
   isAuth: boolean
}

const mapStateToProps = (state: AppRootReducerType): mapStateToPropsType => {
   return {
      isAuth: state.auth.isAuth
   }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

   const RedirectComponent = (props: mapStateToPropsType) => {
      let { isAuth, ...restProps } = props
      if (!isAuth) return <Redirect to={"/login"} />
      return <Component {...restProps as T & {}} />
   }

   const connectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
   return connectRedirectComponent
}