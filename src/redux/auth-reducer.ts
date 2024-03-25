
import { Dispatch } from 'redux';
import { authApi } from "../api/api"
import { FormDataType } from '../components/login/Login';
import { ThunkDispatch } from 'redux-thunk';
import { AppAllReducerType, AppRootReducerType } from './store';
import { stopSubmit } from 'redux-form';

export type stateAuthType = {
   id: number
   email: string
   login: string
   isAuth: boolean
}
export type actionAuthType = setUserDataType
type setUserDataType = ReturnType<typeof setUserData>


const initialState = {
   id: 0,
   email: "",
   login: "",
   isAuth: false
}
export const authReducer = (state: stateAuthType = initialState, action: actionAuthType): stateAuthType => {
   switch (action.type) {
      case "SET-USER-DATA": {
         return { ...state, ...action.payload }
      }
      default:
         return state
   }
}

export const setUserData = (id: number, email: string, login: string, isAuth: boolean) => {
   return {
      type: "SET-USER-DATA",
      payload: { id, email, login, isAuth }
   } as const
}

export const authorization = () => (dispatch: Dispatch) => {
   return authApi.authMe()
      .then(data => {
         if (data.resultCode === 0) {
            const { id, email, login } = data.data

            dispatch(setUserData(id, email, login, true))
         }
      })
}

export const loginThunk = (data: FormDataType) => async (dispatch: ThunkDispatch<AppRootReducerType, null, AppAllReducerType>) => {

   return await authApi.login(data)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(authorization())
         } else {
            const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", { _error: errorMessage }))
         }
      })
}

export const logoutThunk = () => async (dispatch: Dispatch) => {

   return await authApi.logout()
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(setUserData(0, "", "", false))
         }
      })
}