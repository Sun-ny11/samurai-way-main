import { dialogsPageType, filterActionType } from "./state"

export const dialogReducer = (state: dialogsPageType, action: filterActionType): dialogsPageType => {
   switch (action.type) {
      case "UPDATE-MESSAGE": {
         state.sendNewMessage = action.text
         return state
      }
      case "SEND-MESSAGE": {
         state.massagesData.push({ id: "5", message: state.sendNewMessage })
         return state
      }
      default:
         return state
   }
}