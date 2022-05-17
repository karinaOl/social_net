import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";





type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType)=>void
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
        profileApi.getUsersProfile(userID).then(data => {
                this.props.setUserProfile(data);
    });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);