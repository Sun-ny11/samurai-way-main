import { followingInProgressAction } from "./post-reducer"
import { userApi } from "../api/api"
import { Dispatch } from "redux"

export type usersStateType = {
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

export const userReducer = (state: usersStateType = initialState, action: actionUserType): usersStateType => {
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


export type actionUserType = followACType | unFollowACType | setUsersACType | changePageACType | totalCountACType | toggleIsFetchingACType

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

export const followTC = (id: number) => (dispatch: Dispatch) => {
   dispatch(followingInProgressAction(true, id))
   return userApi.following(id)
      .then(data => {
         if (data.resultCode === 0) {
            dispatch(follow(id))
         }
         dispatch(followingInProgressAction(false, id))
      })
}
export const unFollowTC = (id: number) => (dispatch: Dispatch) => {
   dispatch(followingInProgressAction(true, id))
   return userApi.unFollowing(id)
      .then(data => {
         if (data.resultCode === 0) {
            dispatch(unFollow(id))
         }
         dispatch(followingInProgressAction(false, id))
      })
}
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
   dispatch(toggleIsFetching(true))
   return userApi.getUsers(currentPage, pageSize)
      .then(data => {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(data.items))
         dispatch(totalCount(data.totalCount))
      })
}
export const changePageTC = (page: number, pageSize: number) => (dispatch: Dispatch) => {
   dispatch(toggleIsFetching(true))
   dispatch(changePage(page))
   return userApi.changePage(page, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
   })
}
