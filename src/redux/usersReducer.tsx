
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
}

export type UsersActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const initialState: InitialStateUsersType = {
    users: []
}

export const followAC = (userID: number) => {
    return{
        type: "FOLLOW",
        userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return{
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return{
        type: "SET_USERS",
        users
    } as const
}

export const UsersReducer = (state = initialState, action: UsersActionType) : InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u=>u.id === action.userID ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u=>u.id === action.userID ? {...u, followed: false} : u)
            }
        case "SET_USERS":
            return {...state, users: action.users}
        default:
            return state
    }
}