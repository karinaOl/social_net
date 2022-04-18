import classes from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";

export type MessagePropsType = MessageType

export const Message = (props: MessagePropsType) => {

    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}


