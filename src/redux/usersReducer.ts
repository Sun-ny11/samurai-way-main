type initialStateType = {
   items: userType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
}

export type userType = {
   name: string
   id: number
   uniqueUrlName: string | null
   photos: { small: string, large: string }
   status: string | null
   followed: boolean
}

const initialState = {
   items: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1
}

export const userReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
   switch (action.type) {
      case "FOLLOW": {
         return { ...state, items: state.items.map(el => el.id === action.userID ? { ...el, followed: true } : el) }
      }
      case "UN-FOLLOW": {
         return { ...state, items: state.items.map(el => el.id === action.userID ? { ...el, followed: false } : el) }
      }
      case "SET-USERS": {
         return { ...state, items: action.users }
      }
      case "CHANGE-PAGE": {
         return { ...state, currentPage: action.page }
      }
      case "TOTAL-COUNT": {
         return { ...state, totalUsersCount: action.count }
      }
      default:
         return state
   }
}


type actionType = followACType | unFollowACType | setUsersACType | changePageACType | totalCountACType

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type changePageACType = ReturnType<typeof changePageAC>
type totalCountACType = ReturnType<typeof totalCountAC>

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

export const changePageAC = (page: number) => {
   return {
      type: "CHANGE-PAGE",
      page
   } as const
}
export const totalCountAC = (count: number) => {
   return {
      type: "TOTAL-COUNT",
      count
   } as const
}