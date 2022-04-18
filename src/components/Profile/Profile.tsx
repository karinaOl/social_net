import React from "react";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/state";


type ProfileType = {
    postData: Array<PostType>
    message: string
    dispatch: (action: ActionType)=>void
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.postData}
                    message={props.message}
                    dispatch={props.dispatch}
            />
        </div>
    )
}