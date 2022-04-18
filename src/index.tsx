import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {RootStateType} from "./redux/state";
import store from "./redux/reduxStore";

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                    />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')

    );
}

renderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    renderTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
