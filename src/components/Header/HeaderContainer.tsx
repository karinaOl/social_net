import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {setAuthUsersData} from "../../redux/authReducer";


type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType = {
    setAuthUsersData: (userId: number, email: string, login: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

type ProfileAPIResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get<ProfileAPIResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
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