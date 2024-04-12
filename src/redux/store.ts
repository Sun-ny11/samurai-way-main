import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { actionPostType, postReducer } from "./post-reducer";
import { dialogReducer } from "./dialog-reducer";
import { userReducer } from "./usersReducer";
import { actionAuthType, authReducer } from "./auth-reducer";
import thunk, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { filterActionType } from "./state";
import { actionAppType, appReducer } from "./app-reducer";

const reducers = combineReducers({
  profilePage: postReducer,
  dialogsPage: dialogReducer,
  userReducer: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //для работы редакс девтулз
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type AppRootReducerType = ReturnType<typeof reducers>;
//Чтобы диспатчить санку в санку, общий тип
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootReducerType, unknown, AppAllReducerType>;

//Общий тип всех reducer action
export type AppAllReducerType = actionPostType | filterActionType | actionAuthType | actionAppType;

// @ts-ignore
window.store = store;
