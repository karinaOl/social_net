import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {getUsersProfile, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
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

        if(!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootAppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);