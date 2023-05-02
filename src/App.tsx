import React from 'react';
import './App.css';
import {getLargeButtons} from "./components/Badges/BackgroundColorButton/BackgroundColorLargeButton";
import {getDefaultButtons} from "./components/Badges/BackgroundColorButton/BackgroundColorDefaultButton";
import {getWireFramyBadgeAlertDarkButtons} from "./components/Badges/WireFramyBadge/WireFramyBadgeAlertDark";
import {getWireFramyBadgeAlertLight} from "./components/Badges/WireFramyBadge/WireFramyBadgeAlertLight";
import {getWireFramyBadgesAlterWithWhiteBG} from "./components/Badges/WireFramyBadge/WireFramyWhiteBadge";
import Badges from "./components/Badges";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Badges/>
                {/*{getLargeButtons()}*/}
                {/*{getDefaultButtons()}*/}
                {/*{getWireFramyBadgeAlertLight()}*/}
                {/*{getWireFramyBadgeAlertDarkButtons()}*/}
            </header>
        </div>
    );
}


export default App;
