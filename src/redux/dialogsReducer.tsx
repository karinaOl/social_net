import React from "react";

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
}

export const dialogsReducer = (state = initialState, action: DialogsActionType) : initialDialogStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
            }

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            }
        default:  return state
    }
}

//action creator
export const updateNewMessageBodyCreator = (body: string) =>({type:UPDATE_NEW_MESSAGE_BODY, body: body} as const)
export const sendMessageCreator = (newMessageBody: string) =>({type: SEND_MESSAGE, newMessageBody} as const)

// type
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
}

export type DialogsActionType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

const UPDATE_NEW_MESSAGE_BODY = 'dialog/UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE= 'dialog/SEND_MESSAGE';