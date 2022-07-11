import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {getAuthUserData} from "../../redux/authReducer";



type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType



class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootAppStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);