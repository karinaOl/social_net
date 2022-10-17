import {CommonAPIResponseDataType, followAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objectsHelper";


const initialState: InitialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const UsersReducer = (state = initialState, action: UsersActionType): InitialStateUsersType => {
    switch (action.type) {
        case "user/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }
        case "user/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            }
        case "user/SET-USERS":
            return {
                ...state, users: action.users
            }
        case "user/SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "user/SET-TOTAL-USER-COUNT":
            return {
                ...state, totalUserCount: action.totalCount
            }
        case "user/TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "user/TOGGLE-IS-FOLLOWING-PROGRESS":
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

const followUnfollowFlow = async (
    dispatch: Dispatch<UsersActionType>,
    actionCreator: (user_ID: number) => UsersActionType,
    apiMethod: (user_ID: number) => Promise<CommonAPIResponseDataType>,
    user_ID: number
) => {
    dispatch(toggleIsFollowingProgress(true, user_ID));
    let data = await apiMethod(user_ID);
    if (data.resultCode === 0) dispatch(actionCreator(user_ID));
    dispatch(toggleIsFollowingProgress(false, user_ID));
};

//thank creator
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch<UsersActionType>) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await userAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));

}

export const follow = (userID: number) => async (dispatch: Dispatch<UsersActionType>) => {
    await followUnfollowFlow(dispatch, followUser, followAPI.follow.bind(followAPI), userID)
}

export const unfollow = (userID: number) => async (dispatch: Dispatch<UsersActionType>) => {
    await followUnfollowFlow(dispatch, unfollowUser, followAPI.unfollow.bind(followAPI), userID)
}

//action creator
export const followUser = (userID: number) => ({type: "user/FOLLOW", userID} as const)
export const unfollowUser = (userID: number) => ({type: "user/UNFOLLOW", userID} as const)
export const setUsers = (users: UserType[]) => ({type: "user/SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "user/SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUserCount = (totalCount: number) => ({type: "user/SET-TOTAL-USER-COUNT", totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "user/TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleIsFollowingProgress = (inProgress: boolean, userID: number) =>
    ({type: "user/TOGGLE-IS-FOLLOWING-PROGRESS", inProgress, userID} as const)

//types
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

export type UsersActionType = ReturnType<typeof followUser>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>


