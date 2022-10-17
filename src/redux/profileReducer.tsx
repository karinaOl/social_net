import React from "react";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

export type initialProfileStateType = typeof initialState;

const initialState = {
    profile: {} as ProfileType,
    posts: [
        {id: 1, message: "Hello, how are you?", likesCount: 5},
        {id: 2, message: "How it is going?", likesCount: 8},
    ],
    status: ""
}


export const profileReducer = (state = initialState, action: ProfileActionType): initialProfileStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: new Date().getTime(), message: action.newPostText, likesCount: 1};
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case "profile/SET-USER-STATUS":
            return {
                ...state, status: action.status
            }
        case "profile/DELETE_POST":
            return {
                ...state, posts: state.posts.filter(el => el.id !== action.postID)
            }
        default:
            return state
    }
}

//thank creator
export const getUserProfile = (userID: string) => async (dispatch: Dispatch<ProfileActionType>) => {
    let data = await profileApi.getUserProfile(userID)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userID: string) => async (dispatch: Dispatch) => {
    let data = await profileApi.getUserStatus(userID)
    dispatch(setUserStatus(data))

}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let data = await profileApi.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }

}

//action creator
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const deletePostActionCreator = (postID: number) => ({type: "profile/DELETE_POST", postID} as const)
const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)

//types
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

export type ProfileActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostActionCreator>


const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_USER_STATUS = "profile/SET-USER-STATUS";


