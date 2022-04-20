import { MessageType } from '../../../redux/dialogsReducer'
import classes from './../Dialogs.module.css'

export type MessagePropsType = MessageType

export const Message = (props: MessagePropsType) => {

    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}


