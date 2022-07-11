import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import React, {ChangeEvent} from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";



export const Dialogs = (props: DialogsPropsType) => {

    let newMessageBody = props.dialogsPage.newMessageBody;

    const onClickMessagesAddHandler = () => {
        props.sendMessage()
    };
    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    };

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
                <div>
                    <textarea value={newMessageBody}
                              onChange={onChangeNewMessageHandler}
                              placeholder={'Enter your message'}/>
                    <button onClick={onClickMessagesAddHandler}>add</button>
                </div>
            </div>
        </div>
    )
}