import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {initialAuthStateType, setAuthUsersData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";


type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType = {
    setAuthUsersData: (userId: number, email: string, login: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType



class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        authAPI.getAuth().then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthUsersData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer);