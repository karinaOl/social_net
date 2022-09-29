import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import React from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {AddMessageFormDataType, AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";



export const Dialogs = (props: DialogsPropsType) => {

    const addMessage = (values: AddMessageFormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItems key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div>
                <div className={classes.messages}>
                    {props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)}
                </div>
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}
