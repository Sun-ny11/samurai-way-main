import { ThunkDispatch } from "redux-thunk"
import { AppAllReducerType, AppRootReducerType } from "./store"
import { authorization } from "./auth-reducer"

export type stateAppType = {
   initialized: boolean
}
export type actionAppType = setInitializedType
type setInitializedType = ReturnType<typeof setInitialized>


const initialState = {
   initialized: false
}
export const appReducer = (state: stateAppType = initialState, action: actionAppType): stateAppType => {
   switch (action.type) {
      case "INITIALIZED": {
         return { ...state, initialized: true }
      }
      default:
         return state
   }
}

export const setInitialized = () => {
   return {
      type: "INITIALIZED",
   } as const
}


export const initializedApp = () => async (dispatch: ThunkDispatch<AppRootReducerType, null, AppAllReducerType>) => {
   dispatch(authorization())
      .then(() => {
         dispatch(setInitialized())
      })
}