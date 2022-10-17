import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";


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


export const Users: FC<UsersPropsType> = ({
                                              totalUserCount,
                                              pageSize,
                                              currentPage,
                                              onPageChanged,
                                              users,
                                              ...props
                                          }) => {

    return (
        <div>
            <Paginator totalUserCount={totalUserCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map(u => <User user={u} follow={props.follow} unfollow={props.unfollow}
                                  followingInProgress={props.followingInProgress}/>)}
        </div>
    )
}