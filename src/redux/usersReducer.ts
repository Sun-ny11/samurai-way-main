type initialStateType = {
   items: userType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
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
   currentPage: 1,
   isFetching: false
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
      case "TOGGLE-IS-FETCHING": {
         return { ...state, isFetching: action.status }
      }
      default:
         return state
   }
}


type actionType = followACType | unFollowACType | setUsersACType | changePageACType | totalCountACType | toggleIsFetchingACType

type followACType = ReturnType<typeof follow>
type unFollowACType = ReturnType<typeof unFollow>
type setUsersACType = ReturnType<typeof setUsers>
type changePageACType = ReturnType<typeof changePage>
type totalCountACType = ReturnType<typeof totalCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export const follow = (userID: number) => {
   return {
      type: "FOLLOW",
      userID
   } as const
}
export const unFollow = (userID: number) => {
   return {
      type: "UN-FOLLOW",
      userID
   } as const
}
export const setUsers = (users: any) => {
   return {
      type: "SET-USERS",
      users
   } as const
}

export const changePage = (page: number) => {
   return {
      type: "CHANGE-PAGE",
      page
   } as const
}
export const totalCount = (count: number) => {
   return {
      type: "TOTAL-COUNT",
      count
   } as const
}
export const toggleIsFetching = (status: boolean) => {
   return {
      type: "TOGGLE-IS-FETCHING",
      status
   } as const
}
