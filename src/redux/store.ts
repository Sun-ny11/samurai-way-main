import { applyMiddleware, combineReducers, createStore } from "redux";
import { actionPostType, postReducer } from "./post-reducer";
import { dialogReducer } from "./dialog-reducer";
import { userReducer, usersStateType } from "./usersReducer";
import { actionAuthType, authReducer, stateAuthType } from "./auth-reducer";
import thunk, { ThunkAction } from "redux-thunk";
import { FormReducer, reducer as formReducer } from "redux-form";
import { dialogsPageType, filterActionType } from "./state";
import { actionAppType, appReducer } from "./app-reducer";


const reducers = combineReducers({
   profilePage: postReducer,
   dialogsPage: dialogReducer,
   userReducer: userReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppRootReducerType = ReturnType<typeof reducers>
//Чтобы диспатчить санку в санку, общий тип
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootReducerType, unknown, AppAllReducerType>

//Общий тип всех reducer action
export type AppAllReducerType = actionPostType | filterActionType | actionAuthType | actionAppType

// @ts-ignore
window.store = store