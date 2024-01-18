import { filterActionType, postDataType, profilePageType } from "./state"

const initialState: profilePageType = {
   postsData: [
      { id: "1", message: "Hi!" },
      { id: "2", message: "My new account" },
   ],
   newPostText: ""
}

export const postReducer = (state: profilePageType = initialState, action: filterActionType): profilePageType => {
   switch (action.type) {
      case "ADD-POST": {
         const newPost: postDataType = {
            id: "3",
            message: state.newPostText,
         }
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ""
         }
      }
      case "UPDATE-NEW-POST": {
         return { ...state, newPostText: action.text }
      }
      default: return state
   }
}