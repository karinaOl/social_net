import {RootAppStateType} from "../../redux/reduxStore";
import {
    follow,
    InitialStateUsersType, requestUsers,
    setCurrentPage, toggleIsFollowingProgress, unfollow,
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUserCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from "../../redux/usersSelector";


type MapStateToPropsType = InitialStateUsersType;

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    toggleIsFollowingProgress: (inProgress: boolean, userID: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export type UsersTypeContainer = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersTypeContainer> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.requestUsers(currentPage, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers
})(UsersContainer));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        requestUsers
    })
)(UsersContainer);