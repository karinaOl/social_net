import React from "react";


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
        {id: 1, message: 'Hello, how are you?', likesCount: 5},
        {id: 2, message: 'How it is going?', likesCount: 8},
    ],
    messageForNewPost: ''
}

export type ProfileActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof setUserProfile>

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
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
        default:
            return state
    }
}

