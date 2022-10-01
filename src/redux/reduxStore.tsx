import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogsActionType, dialogsReducer} from "./dialogsReducer";
import {SideBarActionType, sidebarReducer} from "./sidebarReducer";
import {UsersActionType, UsersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./authReducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {AppActionType, appReducer} from "./appReducer";


export type RootAppStateType = ReturnType<typeof rootReducer>;
export type RootStoreType = typeof store
export type RootActionType = AuthActionType
    | DialogsActionType
    | ProfileActionType
    | SideBarActionType
    | UsersActionType
    | AppActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootAppStateType, unknown, RootActionType>;

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

//@ts-ignore
window.store = store;