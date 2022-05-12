import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {UsersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";


export type RootAppStateType = ReturnType<typeof rootReducer>;
export type RootStoreType = typeof store

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
});

let store = createStore(rootReducer)

export default store;
