
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
   usersData: userDataType[]
   massagesData: massagesDataType[]
   postsData: postDataType[]
   newPostText: string
}


export const store = {
   _state: {
      usersData: [
         { id: "1", name: "Dima", avatar: "x" },
         { id: "2", name: "Masha", avatar: "xx" },
         { id: "3", name: "Petya", avatar: "xxx" },
         { id: "4", name: "Nastya", avatar: "xxxx" },
         { id: "5", name: "Sasha", avatar: "xxxxx" },
      ],
      // dialogsPage:{}
      massagesData: [
         { id: "1", message: "Hi, how are you" },
         { id: "2", message: "Hi" },
         { id: "3", message: "Hi, how are you" },
         { id: "4", message: "Hi" },
         { id: "5", message: "Hi, how are you" },
      ],

      postsData: [
         { id: "1", message: "Hi!" },
         { id: "2", message: "My new account" },
      ],
      newPostText: ""
   },
   getState(){
      return this._state
   },
   _collSubscriber() {
   },
   addPost() {
      
      const newPost: postDataType = {
         id: "3",
         message: this._state.newPostText,
      }
      this._state.postsData.push(newPost)
      this._collSubscriber()
   },
   updateNewPostText(value: string) {
      this._state.newPostText = value
      this._collSubscriber()
   },
   subscribe(observer: () => void) {
      this._collSubscriber = observer
   },
}

