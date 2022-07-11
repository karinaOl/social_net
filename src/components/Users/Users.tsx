import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUserCount: number
    users: UserType[]
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: number[]
    toggleIsFollowingProgress: (inProgress: boolean, userID: number) => void
}


export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const followUser = (userID: number) => {
        props.follow(userID);
    };
    const unfollowUser = (userID: number) => {
        props.unfollow(userID)
    };

    return (
        <div>
            <div>
                {pages.map((p,i) => {
                    return <span key={"page" + i} className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                      <NavLink to={"/profile/" + u.id}>
                          <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                      </NavLink>
                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={()=>unfollowUser(u.id)} disabled={props.followingInProgress.some(id=> id === u.id)}>UNFOLLOW</button>
                          : <button onClick={()=>followUser(u.id)} disabled={props.followingInProgress.some(id=> id === u.id)}>FOLLOW</button>}
                  </div>
              </span>
                <span>
                  <span>
                      <div>{u.name}</div>
                      <div>{u.status}</div>
                  </span>
                  <span>
                      <div>{"u.location.city"}</div>
                      <div>{"u.location.country"}</div>
                  </span>
              </span>
            </div>)}
        </div>
    )
}