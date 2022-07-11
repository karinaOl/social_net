import React from "react";
import {initialDialogStateType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: initialDialogStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: ()=>void
    updateNewMessageBody: (body:string)=>void
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
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);