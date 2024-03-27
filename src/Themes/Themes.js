import React, { useState } from "react";
import './Themes.css';

const Themes = ({ onChangeTheme }) => {

    const [format, setFormat] = useState('space');

    const handleThemes = (newFormat) => {
        console.log("Theme changed to:", newFormat);
        setFormat(newFormat);
        onChangeTheme(newFormat);
    };


    return (
        <div className="fileTypeThemes">
            <button 
                className={format === 'space' ? 'active' : ''}
                onClick={() => handleThemes('space')}
            >
                Space
            </button>
            <button 
                className={format === 'warm' ? 'active' : ''}
                onClick={() => handleThemes('warm')}
            >
                Warm
            </button>
            <button 
                className={format === 'rain' ? 'active' : ''}
                onClick={() => handleThemes('rain')}
            >
                Rain
            </button>
            <button 
                className={format === 'cafe' ? 'active' : ''}
                onClick={() => handleThemes('cafe')}
            >
                Cafe
            </button>
        </div>
    )
};

export default Themes;