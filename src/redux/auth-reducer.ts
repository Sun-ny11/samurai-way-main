import { Dispatch } from 'redux';
import { authApi } from "../api/api"

type stateAuthType = {
   id: number
   email: string
   login: string
   isAuth: boolean
}
type actionType = setUserDataType
type setUserDataType = ReturnType<typeof setUserData>


const initialState = {
   id: 0,
   email: "",
   login: "",
   isAuth: false
}
export const authReducer = (state: stateAuthType = initialState, action: actionType): stateAuthType => {
   switch (action.type) {
      case "SET-USER-DATA": {
         return { ...state, ...action.data, isAuth: true }
      }
      default:
         return state
   }
}

export const setUserData = (id: number, email: string, login: string) => {
   return {
      type: "SET-USER-DATA",
      data: { id, email, login }
   } as const
}

export const authorization = () => (dispatch:Dispatch) => {
   return authApi.authMe()
      .then(data => {
         if (data.resultCode === 0) {
            const { id, email, login } = data.data
            dispatch(setUserData(id, email, login))
         }
      })
}