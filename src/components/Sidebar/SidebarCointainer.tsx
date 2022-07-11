import {SidebarType} from "../../redux/sidebarReducer";
import {RootAppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";

type MapStateToPropsType = {
    friends: SidebarType[]
}
type MapDispatchToPropsType = {}

const mapStateToProps = (state: RootAppStateType): MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}

const mapDispatchToProps = (): MapDispatchToPropsType => {
    return{}
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);