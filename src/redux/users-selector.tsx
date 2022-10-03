import {RootAppStateType} from "./reduxStore";

export const getUsers = (state: RootAppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootAppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: RootAppStateType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state: RootAppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootAppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootAppStateType) => {
    return state.usersPage.followingInProgress
}