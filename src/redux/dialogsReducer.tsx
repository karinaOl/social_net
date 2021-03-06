import React from "react";

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type initialDialogStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type DialogsActionType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

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

export const updateNewMessageBodyCreator = (body: string) => {
    return{
        type:UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageCreator = () => {
    return{
        type: SEND_MESSAGE
    } as const
}

export const dialogsReducer = (state = initialState, action: DialogsActionType) : initialDialogStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            }
        default:  return state
    }
}