import {authAPI} from "../api/api";
import {AppThunkType} from "./reduxStore";
import {stopSubmit} from "redux-form";

let initialState = {
    id: null as number | null,
    email: "",
    login: "",
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthActionType): initialAuthStateType => {
    switch (action.type) {
        case "auth/SET-USERS-DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//thank creator
export const getAuthUserData = (): AppThunkType<Promise<void>> => async (dispatch) => {
    let data = await authAPI.getAuth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUsersData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = (): AppThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUsersData(0, "", "", false));
    }
}

//action creator
export const setAuthUsersData = (userId: number, email: string, login: string, isAuth: boolean) =>
    ({type: "auth/SET-USERS-DATA", payload: {id: userId, email, login, isAuth}} as const)


//types
export type initialAuthStateType = typeof initialState;
export type AuthActionType = ReturnType<typeof setAuthUsersData>
