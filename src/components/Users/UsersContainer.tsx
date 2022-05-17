import {RootAppStateType} from "../../redux/reduxStore";
import {
    follow,
    InitialStateUsersType,
    setCurrentPage, setTotalUserCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {connect} from "react-redux";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";



type MapStateToPropsType = InitialStateUsersType;

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (inProgress: boolean, userID: number) => void
}

export type UsersTypeContainer = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersTypeContainer> {

    componentDidMount() {
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount);
        });
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootAppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersContainer);