import React from 'react';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {SidebarContainer} from "./components/Sidebar/SidebarCointainer";



function App() {


    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <SidebarContainer/>
            <div className={'appWrapperContent'}>
                <Switch>
                    <Route path={'/profile/:userID?'} render={()=><ProfileContainer/>}/>
                    <Route path={'/dialogs/'} render={()=><DialogsContainer/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                    <Route path={'/users'} render={()=><UsersContainer/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
