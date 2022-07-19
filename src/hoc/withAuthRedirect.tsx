import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootAppStateType} from "../redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootAppStateType): MapStateToPropsType => {
    return{
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<WCP>(Component: ComponentType<WCP>){

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as WCP}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}