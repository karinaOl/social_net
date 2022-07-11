import {followAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}

export type InitialStateUsersType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersActionType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>


const initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const followSuccess = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUserCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USER-COUNT",
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}
export const toggleIsFollowingProgress = (inProgress: boolean, userID: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        inProgress,
        userID
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
    }
}

export const follow = (userID: number) => {
  return (dispatch: Dispatch<UsersActionType>) => {
      dispatch(toggleIsFollowingProgress(true, userID));
      followAPI.follow(userID)
          .then(data => {
              if (data.resultCode === 0) dispatch(followSuccess(userID));
              dispatch(toggleIsFollowingProgress(false, userID));
          });
  }
}

export const unfollow = (userID: number) => {
  return (dispatch: Dispatch<UsersActionType>) => {
      dispatch(toggleIsFollowingProgress(true, userID));
      followAPI.unfollow(userID)
          .then(data => {
              if (data.resultCode === 0) dispatch(unfollowSuccess(userID));
              dispatch(toggleIsFollowingProgress(false, userID));
          });
  }
}

export const UsersReducer = (state = initialState, action: UsersActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-USER-COUNT":
            return {
                ...state, totalUserCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}