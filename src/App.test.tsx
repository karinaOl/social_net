import React from 'react';
import ReactDOM from "react-dom";
import {SocialMainApp} from './App';


test('renders learn react link', () => {
    const div = document.createElement("div");
    ReactDOM.render(<SocialMainApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
