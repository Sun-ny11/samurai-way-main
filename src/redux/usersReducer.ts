import { followingInProgressAction } from "./post-reducer";
import { ResponseDataFollowUnfollow, userApi } from "../api/api";
import { Dispatch } from "redux";

export type usersStateType = {
  items: userType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};

export type userType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: { small: string; large: string };
  status: string | null;
  followed: boolean;
};

const initialState = {
  items: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

export const userReducer = (state: usersStateType = initialState, action: actionUserType): usersStateType => {
  switch (action.type) {
    case "SUBSCRIBE-UNSUBSCRIBE": {
      return {
        ...state,
        items: state.items.map((el) => (el.id === action.userID ? { ...el, followed: action.status } : el)),
      };
    }

    case "SET-USERS": {
      return { ...state, items: action.users };
    }
    case "CHANGE-PAGE": {
      return { ...state, currentPage: action.page };
    }
    case "TOTAL-COUNT": {
      return { ...state, totalUsersCount: action.count };
    }
    case "TOGGLE-IS-FETCHING": {
      return { ...state, isFetching: action.status };
    }
    default:
      return state;
  }
};

export type actionUserType =
  | setUsersACType
  | changePageACType
  | totalCountACType
  | toggleIsFetchingACType
  | subscribeUnsubscribeType;

type setUsersACType = ReturnType<typeof setUsers>;
type changePageACType = ReturnType<typeof changePage>;
type totalCountACType = ReturnType<typeof totalCount>;
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>;
type subscribeUnsubscribeType = ReturnType<typeof subscribeUnsubscribe>;

export const subscribeUnsubscribe = (userID: number, status: boolean) => {
  return {
    type: "SUBSCRIBE-UNSUBSCRIBE",
    userID,
    status,
  } as const;
};

export const setUsers = (users: any) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};

export const changePage = (page: number) => {
  return {
    type: "CHANGE-PAGE",
    page,
  } as const;
};
export const totalCount = (count: number) => {
  return {
    type: "TOTAL-COUNT",
    count,
  } as const;
};
export const toggleIsFetching = (status: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    status,
  } as const;
};

const followUnfollowFlow = (
  dispatch: Dispatch,
  id: number,
  apiMethod: (id: number) => Promise<ResponseDataFollowUnfollow>,
  status: boolean
) => {
  dispatch(followingInProgressAction(true, id));
  return apiMethod(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(subscribeUnsubscribe(id, status));
    }
    dispatch(followingInProgressAction(false, id));
  });
};

export const followTC = (id: number) => (dispatch: Dispatch) => {
  followUnfollowFlow(dispatch, id, userApi.following, true);
};
export const unFollowTC = (id: number) => (dispatch: Dispatch) => {
  followUnfollowFlow(dispatch, id, userApi.unFollowing, false);
};
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  return userApi.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(totalCount(data.totalCount));
  });
};
export const changePageTC = (page: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(changePage(page));
  return userApi.setChangePage(page, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  });
};
