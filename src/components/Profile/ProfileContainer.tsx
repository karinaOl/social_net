import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
    getUserStatus: (userID: string) => void
    updateUserStatus: (status: string) => void
}

type PathParamsType = {
    userID: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        let userID = this.props.match.params.userID

        if(!userID){
            userID = this.props.authorizedUserId!.toString();
            if(!userID){
                this.props.history.push("/login")
            }
        }

        if (userID) {
            this.props.getUserProfile(userID);
            this.props.getUserStatus(userID);
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootAppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);