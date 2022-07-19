import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile.userId){
        return <Preloader/>
    }

    return(
        <div>
            <div>
                какая-то картинка
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large && props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                ava+description
            </div>
        </div>
    )
}
