import {AppThunkType} from "./reduxStore";
import {getAuthUserData} from "./authReducer";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
  switch (action.type){
      case "SET_INITIALIZED_SUCCESS":
      return {
          ...state,
          initialized: true
      }

      default:
          return state
  }
}

//thunk creator
export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
            dispatch(setInitializedSuccess())
        })
}

//action creator
export const setInitializedSuccess = () => ({type: "SET_INITIALIZED_SUCCESS"})

//types
type InitialStateType = typeof initialState

export type AppActionType = ReturnType<typeof setInitializedSuccess>