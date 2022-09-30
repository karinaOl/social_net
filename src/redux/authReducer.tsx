import {authAPI} from "../api/api";
import {AppThunkType} from "./reduxStore";
import {stopSubmit} from "redux-form";

let initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthActionType): initialAuthStateType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//thank creator
export const getAuthUserData = (): AppThunkType => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUsersData(id, email, login, true));
            }
        });
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        });
    }
}

export const logout = (): AppThunkType => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUsersData(0, "", "", false));
            }
        });
    }
}

//action creator
export const setAuthUsersData = (userId: number, email: string, login: string, isAuth: boolean) =>
    ({type: "SET-USERS-DATA", payload: {userId, email, login, isAuth}} as const)


//types
export type initialAuthStateType = typeof initialState;
export type AuthActionType = ReturnType<typeof setAuthUsersData>
