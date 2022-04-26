import {connect} from "react-redux";
import {RootAppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {Users} from "./Users";



type MapStateToPropsType = InitialStateUsersType;

type MapDispatchToPropsType = {
    follow: (userID: number)=>void
    unfollow: (userID: number)=>void
    setUsers: (users: UserType[])=>void
}

export type UsersTypeContainer = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootAppStateType) : MapStateToPropsType => {
    return{
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType=> {
    return{
        follow: (userID: number)=>{
            dispatch(followAC(userID))
        },
        unfollow: (userID: number)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[])=>{
            dispatch(setUsersAC(users))
    }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);