import React from "react"
import * as ReactDOM from 'react-dom/client';

import App from "../components/App";

import style from "../css/index.css"


// Static images import
import avatar from "../assets/images/avatar.png"


render();

function render()
{
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const element = <App></App>;
    root.render(element);
}
