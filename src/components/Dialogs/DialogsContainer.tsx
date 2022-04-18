import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {ActionType, DialogType, MessageType} from "../../redux/state";
import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";
import {RootStoreType} from "../../redux/reduxStore";

type DialogsContainerPropsType = {
    store: RootStoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage;

    const sendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    const updateNewMessageBody = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return <Dialogs dialogsPage={state}
                    updateNewMessageBody={updateNewMessageBody}
                    sendMessage={sendMessageClick}/>

}