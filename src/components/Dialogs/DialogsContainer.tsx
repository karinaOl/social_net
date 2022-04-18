import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {ActionType, DialogType, MessageType} from "../../redux/state";
import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";
import {RootStoreType} from "../../redux/reduxStore";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                const sendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                };
                const updateNewMessageBody = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                };
                return (
                    <Dialogs dialogsPage={state}
                             updateNewMessageBody={updateNewMessageBody}
                             sendMessage={sendMessageClick}/>
                )
            }}
        </StoreContext.Consumer>)

}