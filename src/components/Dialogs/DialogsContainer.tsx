import React, {ComponentType} from "react";
import {initialDialogStateType, sendMessageCreator} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: initialDialogStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string)=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: RootAppStateType): MapStateToPropsType =>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType =>{
    return{
        sendMessage: (newMessageBody: string)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

const DialogsContainer = compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogsContainer;