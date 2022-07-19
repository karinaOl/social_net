import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";


type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}