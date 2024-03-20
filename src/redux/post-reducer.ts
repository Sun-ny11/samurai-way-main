import { follow } from './usersReducer';
import { addPostAction, postDataType, updateTaskAction } from "./state"
import { Dispatch } from 'redux';
import { profileApi, userApi } from '../api/api';

export type profilePageType = {
   postsData: postDataType[]
   newPostText: string
   profile: responseProfileType
   followingInProgress: number[]
   status: string
}

const initialState: profilePageType = {
   postsData: [
      { id: "1", message: "Hi!" },
      { id: "2", message: "My new account" },
   ],
   newPostText: "",
   profile: {
      aboutMe: '',
      contacts: {
         facebook: '',
         website: '',
         vk: '',
         twitter: '',
         instagram: '',
         youtube: '',
         github: '',
         mainLink: ''
      },
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      userId: 0,
      photos: {
         small: '',
         large: ''
      }
   },
   //{} as responseProfileType можно использовать вместо ...
   followingInProgress: [],
   status: ""
}

export type responseProfileType = {
   aboutMe: string
   contacts: contactsType
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   userId: number
   photos: photosType
}
type contactsType = {
   facebook: string
   website: string
   vk: string
   twitter: string
   instagram: string
   youtube: string
   github: string
   mainLink: string
}
type photosType = {
   small: string
   large: string
}
export type actionPostType = addPostType | updatePostType | setProfileType | followingInProgressActionType | setStatusType
type addPostType = ReturnType<typeof addPost>
type updatePostType = ReturnType<typeof updatePost>
type setProfileType = ReturnType<typeof setProfile>
type followingInProgressActionType = ReturnType<typeof followingInProgressAction>
type setStatusType = ReturnType<typeof setStatus>


export const postReducer = (state: profilePageType = initialState, action: actionPostType): profilePageType => {
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
      case "SET-PROFILE": {
         return { ...state, profile: action.profile }
      }
      case 'FOLLOWING-IN-PROGRESS': {

         return action.inProgress ? { ...state, followingInProgress: [...state.followingInProgress, action.id] }
            : { ...state, followingInProgress: state.followingInProgress.filter(id => id !== action.id) }
         // return 
      }
      case 'SET-STATUS': {
         return { ...state, status: action.status }
      }
      default: return state
   }
}


export const addPost = (): addPostAction => {
   return {
      type: "ADD-POST"
   } as const
}


export const updatePost = (text: string): updateTaskAction => {
   return {
      type: "UPDATE-NEW-POST",
      text: text
   } as const
}

export const setProfile = (profile: responseProfileType) => {
   return {
      type: "SET-PROFILE",
      profile
   } as const
}
export const followingInProgressAction = (inProgress: boolean, id: number) => {
   return {
      type: "FOLLOWING-IN-PROGRESS",
      inProgress,
      id
   } as const
}//?????????

export const setStatus = (status: string) => {
   return {
      type: "SET-STATUS",
      status
   } as const
}





export const goToProfileTC = (userId: number) => (dispatch: Dispatch) => {
   return profileApi.getProfile(userId)
      .then(res => {
         dispatch(setProfile(res.data))
      })
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
   return profileApi.getStatus(userId)
      .then(res => dispatch(setStatus(res.data)))
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
   return profileApi.updateStatus(status)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      }
      )
}