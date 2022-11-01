import React from "react"
import * as ReactDOM from 'react-dom/client';

import MapButton from "../components/MapButton";
import PanelButtons from "../components/ButtonsPanel";


import style from "../css/index.css"


// Static images import
import avatar from "../assets/images/avatar.png"

render();

function render()
{
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const mapButton = <MapButton></MapButton>;
    root.render(mapButton);

    const root2 = ReactDOM.createRoot(
        document.getElementById("root2")
    );
    const buttonPanel = <PanelButtons></PanelButtons>;
    root2.render(buttonPanel);
}
