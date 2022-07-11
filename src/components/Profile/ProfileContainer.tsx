import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {getUsersProfile, ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    getUsersProfile: (userID: string) => void
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

        this.props.getUsersProfile(userID)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootAppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);