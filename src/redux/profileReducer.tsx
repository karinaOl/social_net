import React from "react";


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type initialProfileStateType = {
    posts: Array<PostType>
    messageForNewPost: string
}

const initialState: initialProfileStateType = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likesCount: 5},
        {id: 2, message: 'How it is going?', likesCount: 8},
    ],
    messageForNewPost: ''
}

export type ProfileActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changeNewTextActionCreator>

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';

export const addPostActionCreator = () => {
    return{
        type: ADD_POST,
    } as const
}

export const changeNewTextActionCreator = (newValue: string) => {
    return{
        type: CHANGE_NEW_TEXT,
        newValue: newValue
    }  as const
}

export const profileReducer = (state = initialState, action: ProfileActionType) : initialProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: new Date().getTime(), message: state.messageForNewPost, likesCount: 1};
            state.posts.push(newPost);
            state.messageForNewPost = ''
            return state;
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newValue;
            return state;
        default:  return state
    }
}

