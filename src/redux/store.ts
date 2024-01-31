   import { combineReducers, createStore } from "redux";
   import { postReducer } from "./post-reducer";
   import { dialogReducer } from "./dialog-reducer";
import { userReducer } from "./usersReducer";


   const reducers = combineReducers({
      profilePage: postReducer,
      dialogsPage: dialogReducer,
      userReducer:userReducer
   })

   export const store = createStore(reducers)

   export type AppRootReducerType = ReturnType<typeof reducers>


   // @ts-ignore
   window.store = store