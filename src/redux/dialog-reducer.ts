import { dialogsPageType, filterActionType } from "./state"

const initialState: dialogsPageType = {
   massagesData: [
      { id: "1", message: "Hi, how are you" },
      { id: "2", message: "Hi" },
      { id: "3", message: "Hi, how are you" },
      { id: "4", message: "Hi" },
      { id: "5", message: "Hi, how are you" },
   ],
   usersData: [
      { id: "1", name: "Dima", avatar: "x" },
      { id: "2", name: "Masha", avatar: "xx" },
      { id: "3", name: "Petya", avatar: "xxx" },
      { id: "4", name: "Nastya", avatar: "xxxx" },
      { id: "5", name: "Sasha", avatar: "xxxxx" },
   ],
   sendNewMessage: "",
}

export const dialogReducer = (state: dialogsPageType = initialState, action: filterActionType): dialogsPageType => {

   switch (action.type) {
      case "UPDATE-MESSAGE": {
         return { ...state, sendNewMessage: action.text }
      }
      case "SEND-MESSAGE": {
         return { ...state, massagesData: [...state.massagesData, { id: "11", message: state.sendNewMessage }], sendNewMessage: "" }
      }
      default:
         return state
   }
}