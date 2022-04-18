import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {


    return (
        <div className='app-wrapper'>
            < Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={
                        <Profile
                            postData={props.state.profilePage.posts}
                            message={props.state.profilePage.messageForNewPost}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route
                        path={'/dialogs/*'}
                        element={
                            <Dialogs
                                dialogsData={props.state.dialogsPage.dialogs}
                                messagesData={props.state.dialogsPage.messages}
                                newMessageBody={props.state.dialogsPage.newMessageBody}
                                dispatch={props.dispatch}
                            />
                        }
                    />
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
