import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";





type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType)=>void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

type ProfileAPIResponseType = ProfileType;

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {
        axios.get<ProfileAPIResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
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


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);