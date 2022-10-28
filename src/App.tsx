import React, {lazy} from 'react';
import './App.css';
import {HashRouter, Route, Switch, withRouter,} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {SidebarContainer} from "./components/Sidebar/SidebarCointainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import store, {RootAppStateType} from "./redux/reduxStore";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))

const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedDialogs = withSuspense(DialogsContainer);

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
                        <Route path={'/profile/:userID?'} render={() => <SuspendedProfile/>}/>
                        <Route path={'/dialogs/'} render={() => <SuspendedDialogs/>}/>
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

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

export const SocialMainApp = () => {
   return(
       <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
   )
}
