import { dialogReducer } from "./dialog-reducer"
import { postReducer } from "./post-reducer"

export type userDataType = {
   id: string
   name: string
   avatar: string
}
export type massagesDataType = {
   id: string
   message: string
}
export type postDataType = {
   id: string
   message: string
}

export type stateType = {
   // usersData: userDataType[]
   dialogsPage: dialogsPageType
   profilePage: profilePageType

}

export type profilePageType = {
   postsData: postDataType[]
   newPostText: string
}
export type dialogsPageType = {
   massagesData: massagesDataType[]
   usersData: userDataType[]
   sendNewMessage: string
}
export type filterActionType = addPostAction | updateTaskAction | sendMessageAction | updateMessageAction

export type addPostAction = {
   type: "ADD-POST"
}
export type updateTaskAction = {
   type: "UPDATE-NEW-POST"
   text: string
}

type sendMessageAction = {
   type: "SEND-MESSAGE"

}
type updateMessageAction = {
   type: "UPDATE-MESSAGE"
   text: string
}



export const store = {
   _state: {

      dialogsPage: {
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
      },

      profilePage: {
         postsData: [
            { id: "1", message: "Hi!" },
            { id: "2", message: "My new account" },
         ],

         newPostText: ""
      },

   },
   _collSubscriber() {
   },
   _addPost() {
      const newPost: postDataType = {
         id: "3",
         message: this._state.profilePage.newPostText,
      }
      this._state.profilePage.postsData.push(newPost)
      this._collSubscriber()
   },
   _updateNewPostText(value: string) {
      this._state.profilePage.newPostText = value
      this._collSubscriber()
   },

   getState() {
      return this._state
   },

   dispatch(action: filterActionType) {

      // this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
      // this._state.profilePage = postReducer(this._state.profilePage, action)

      // this._collSubscriber()

      // switch (action.type) {
      //    // case "ADD-POST": {
      //    //    return this._addPost()
      //    // }
      //    // case "UPDATE-NEW-POST": {
      //    //    return this._updateNewPostText(action.text)
      //    // }
      //    // case "UPDATE-MESSAGE": {
      //    //    this._state.sendNewMessage = action.text
      //    //    return this._collSubscriber()
      //    // }
      //    // case "SEND-MESSAGE":{
      //    //    this._state.massagesData.push({id:"6", message:this._state.sendNewMessage})
      //    //    return this._collSubscriber()
      //    // }
      // }

   },

   subscribe(observer: () => void) {
      this._collSubscriber = observer
   },
}



// export const addTaskAC = (): addPostAction => {
//    return { type: "ADD-POST" }
// }

// export const updateTaskAC = (text: string): updateTaskAction => {
//    return { type: "UPDATE-NEW-POST", text: text }
// }
export const sendMessageAC = (): sendMessageAction => {
   return { type: "SEND-MESSAGE" }
}
export const updateMessageAC = (text: string): updateMessageAction => {
   return { type: "UPDATE-MESSAGE", text: text }
}
