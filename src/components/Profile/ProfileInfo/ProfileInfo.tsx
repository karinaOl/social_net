import React from "react";
import classes from "./ProfileInfo.module.css";


type ProfileInfoType = {

}

export const ProfileInfo = () => {
    return(
        <div>
            <div>
                какая-то картинка
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
