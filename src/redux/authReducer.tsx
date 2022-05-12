export type initialAuthStateType = typeof initialState;

let initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
}

type ActionType = ReturnType<typeof setAuthUsersData>


export const authReducer = (state=initialState, action: ActionType) => {
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