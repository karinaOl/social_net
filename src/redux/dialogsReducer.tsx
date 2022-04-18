import React from "react";
import {ActionType, DialogsPageType} from "./state";

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type initialDialogStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type DialogsActionType = ReturnType<typeof SendMessageCreator> | ReturnType<typeof UpDateNewMessageBodyCreator>

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE= 'SEND_MESSAGE';

const initialState: initialDialogStateType = {
    dialogs: [
        {id: 1, name: 'Karina'},
        {id: 2, name: 'Leha'},
        {id: 3, name: 'Ilona'},
        {id: 4, name: 'Margarita'}
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey hey!'}
    ],
    newMessageBody: ''
}

export const UpDateNewMessageBodyCreator = (body: string) => {
    return{
        type:UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const SendMessageCreator = () => {
    return{
        type: SEND_MESSAGE
    } as const
}

export const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: new Date().getTime(), message: body})
            return state
        default:  return state
    }
}