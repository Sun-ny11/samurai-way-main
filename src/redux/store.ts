   import { combineReducers, createStore } from "redux";
   import { postReducer } from "./post-reducer";
   import { dialogReducer } from "./dialog-reducer";
import { userReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";


   const reducers = combineReducers({
      profilePage: postReducer,
      dialogsPage: dialogReducer,
      userReducer:userReducer,
      auth:authReducer
   })

   export const store = createStore(reducers)

   export type AppRootReducerType = ReturnType<typeof reducers>


   // @ts-ignore
   window.store = store