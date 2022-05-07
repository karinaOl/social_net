import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";


type ProfileInfoType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    debugger
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
                ava+description
            </div>
        </div>
    )
}
