import {Paginator} from "../../common/Paginator/Paginator";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/images.png";
import s from "../Users.module.css";
import React, {FC} from "react";
import {UserType} from "../../../redux/usersReducer";

export type UserPropsType = {
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: number[]
}

export const User: FC<UserPropsType> = ({user, follow, unfollow, followingInProgress}) => {
    const followUser = (userID: number) => {
        follow(userID);
    };
    const unfollowUser = (userID: number) => {
        unfollow(userID)
    };

    return (
        <div key={user.id}>
              <span>
                  <div>
                      <NavLink to={"/profile/" + user.id}>
                          <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                               className={s.userPhoto}/>
                      </NavLink>
                  </div>
                  <div>
                      {user.followed
                          ? <button onClick={() => unfollowUser(user.id)}
                                    disabled={followingInProgress.some(id => id === user.id)}>UNFOLLOW</button>
                          : <button onClick={() => followUser(user.id)}
                                    disabled={followingInProgress.some(id => id === user.id)}>FOLLOW</button>}
                  </div>
              </span>
            <span>
                  <span>
                      <div>{user.name}</div>
                      <div>{user.status}</div>
                  </span>
                  <span>
                      <div>{"u.location.city"}</div>
                      <div>{"u.location.country"}</div>
                  </span>
              </span>
        </div>)
}
