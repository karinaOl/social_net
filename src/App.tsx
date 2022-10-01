import React from 'react';
import './App.css';
import {Route, Switch, withRouter,} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {SidebarContainer} from "./components/Sidebar/SidebarCointainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {RootAppStateType} from "./redux/reduxStore";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";


type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AppContainerType = MapStateToPropsType & MapDispatchToPropsType


class App extends React.Component<AppContainerType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <SidebarContainer/>
                <div className={'appWrapperContent'}>
                    <Switch>
                        <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs/'} render={() => <DialogsContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootAppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
