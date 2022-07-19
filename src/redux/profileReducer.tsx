import React from "react";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type initialProfileStateType = typeof initialState;

const initialState = {
    profile: {} as ProfileType,
    posts: [
        {id: 1, message: "Hello, how are you?", likesCount: 5},
        {id: 2, message: "How it is going?", likesCount: 8},
    ],
    messageForNewPost: "",
    status: ""
}

export type ProfileActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>


const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}

export const changeNewTextActionCreator = (newValue: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newValue: newValue
    } as const
}

const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}

export const getUserProfile = (userID: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileApi.getUserProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getUserStatus = (userID: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getUserStatus(userID)
            .then(data => {
                dispatch(setUserStatus(data))
            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateUserStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }

}

export const profileReducer = (state = initialState, action: ProfileActionType): initialProfileStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: new Date().getTime(), message: state.messageForNewPost, likesCount: 1};
            return {
                ...state,
                messageForNewPost: "",
                posts: [...state.posts, newPost]
            }

        case CHANGE_NEW_TEXT:
            return {
                ...state,
                messageForNewPost: action.newValue
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case "SET-USER-STATUS":
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

