import React from "react";
import './Background.css';
import './Settings.css';
import Background from './Background.js';
// import { Settingsicon } from "./Background.js";
import settingsmenuimage from '../images/Settingscanvas-1.png';

const Settingsmenu = () => {
    const Settingsmenustyle = { // Define Settingsmenustyle as an object
        // position: 'absolute', // Position the Settingsmenu component absolutely
        // top: '50%', // Position it at 50% from the top
        // left: '50%', // Position it at 50% from the left
        // transform: 'translate(-50%, -50%)', // This ensures the center of the Settingsmenu component is at the center of the parent
        // zIndex: 1, // This ensures the Settingsmenu component is on top of the Background component
    }

    return (
        <div style={Settingsmenustyle} className="settings">
            <Background />
            {/* <Settingsicon /> */}
            <img id="settings" src={settingsmenuimage} alt="settingmenuimage" className="settings" />
        </div>
    );
};

export default Settingsmenu;