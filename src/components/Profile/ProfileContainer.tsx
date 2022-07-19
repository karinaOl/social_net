import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType
    status: string
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
            userID = "2";
        }

        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
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
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);