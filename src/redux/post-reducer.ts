import { filterActionType, postDataType, profilePageType } from "./state"

export const postReducer = (state: profilePageType, action: filterActionType): profilePageType => {
   switch (action.type) {
      case "ADD-POST": {
         const newPost: postDataType = {
            id: "3",
            message: state.newPostText,
         }
         state.postsData.push(newPost)
         return state
      }
      case "UPDATE-NEW-POST": {
         state.newPostText = action.text
         return state
      }
      default: return state
   }
}