import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type initialAuthStateType = typeof initialState;

let initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
}

type AuthActionType = ReturnType<typeof setAuthUsersData>


export const authReducer = (state=initialState, action: AuthActionType): initialAuthStateType => {
  switch (action.type){
      case "SET-USERS-DATA":
          return {
              ...state,
              ...action.userData,
              isAuth: true
          }
      default:
          return state
  }
}

export const getAuthUserData = () => {
  return (dispatch: Dispatch<AuthActionType>) => {
      authAPI.getAuth().then(data => {
          if(data.resultCode === 0) {
              let {id, login, email} = data.data
              dispatch(setAuthUsersData(id, email, login));
          }
      });
  }
}

export const setAuthUsersData = (userId: number, email: string, login: string) => {
    return{
        type: "SET-USERS-DATA",
        userData: {
            userId,
            email,
            login,
        }
    }
}