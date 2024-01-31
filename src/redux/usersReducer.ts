// type initialStateType = {
//    users: userType[]
// }
// export type userType = {
//    id: number
//    avatarURL: string
//    followed: boolean
//    fullName: string
//    status: string
//    location: { city: string, country: string }
// }

type initialStateType = {
   items: userType[]
}

export type userType = {
   name: string
   id: number
   uniqueUrlName: string | null
   photos:{small:string, large:string}
   status: string | null
   followed:boolean
}

const initialState = {
   items: []
}
// const initialState = {
//    users: []
// }


export const userReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
   switch (action.type) {
      case "FOLLOW": {
         return { ...state, items: state.items.map(el => el.id === action.userID ? { ...el, followed: true } : el) }
      }
      case "UN-FOLLOW": {
         return { ...state, items: state.items.map(el => el.id === action.userID ? { ...el, followed: false } : el) }
      }
      case "SET-USERS": {
         return { ...state, items: [...state.items, ...action.users] }
      }
      default:
         return state
   }
}
// export const userReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
//    switch (action.type) {
//       case "FOLLOW": {
//          return { ...state, users: state.users.map(el => el.id === action.userID ? { ...el, followed: true } : el) }
//       }
//       case "UN-FOLLOW": {
//          return { ...state, users: state.users.map(el => el.id === action.userID ? { ...el, followed: false } : el) }
//       }
//       case "SET-USERS": {
//          return { ...state, users: [...state.users, ...action.users] }
//       }
//       default:
//          return state
//    }
// }


type actionType = followACType | unFollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
   return {
      type: "FOLLOW",
      userID
   } as const
}
export const unFollowAC = (userID: number) => {
   return {
      type: "UN-FOLLOW",
      userID
   } as const
}
export const setUsersAC = (users: any) => {
   return {
      type: "SET-USERS",
      users
   } as const
}