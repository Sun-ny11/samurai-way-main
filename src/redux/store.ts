import { applyMiddleware, combineReducers, createStore } from "redux";
import { postReducer } from "./post-reducer";
import { dialogReducer } from "./dialog-reducer";
import { userReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";


const reducers = combineReducers({
   profilePage: postReducer,
   dialogsPage: dialogReducer,
   userReducer: userReducer,
   auth: authReducer,
   form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppRootReducerType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store