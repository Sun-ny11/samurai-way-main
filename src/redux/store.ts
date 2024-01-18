   import { combineReducers, createStore } from "redux";
   import { postReducer } from "./post-reducer";
   import { dialogReducer } from "./dialog-reducer";


   const reducers = combineReducers({
      profilePage: postReducer,
      dialogsPage: dialogReducer
   })

   export const store = createStore(reducers)

   export type AppRootReducerType = ReturnType<typeof reducers>


   // @ts-ignore
   window.store = store