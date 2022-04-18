import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {ActionType, DialogType, MessageType} from "../../redux/state";
import React, {ChangeEvent} from "react";
import { SendMessageCreator, UpDateNewMessageBodyCreator } from '../../redux/dialogsReducer';

type DialogsPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionType)=>void
}

export const Dialogs = (props: DialogsPropsType) => {

    let newMessageBody = props.newMessageBody;
    const onClickMessagesAddHandler = () => {
        props.dispatch(SendMessageCreator())
    };
    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(UpDateNewMessageBodyCreator(body))
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                {props.dialogsData.map(d => <DialogItems key={d.id} id={d.id} name={d.name}/>)}

            </div>
            <div>
                <div className={classes.messages}>

                    {props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)}

                </div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onChangeNewMessageHandler}
                              placeholder={'Enter your message'}></textarea>
                    <button onClick={onClickMessagesAddHandler}>add</button>
                </div>
            </div>
        </div>
    )
}