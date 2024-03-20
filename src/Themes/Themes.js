import React, { useState } from "react";
import './Themes.css';

const Themes = ({ onChangeTheme }) => {

    const [format, setFormat] = useState('space')

    const handleThemes = (newFormat) => {
        console.log("Theme changed to:", newFormat);
        setFormat(newFormat);
        if(newFormat === 'space'){
            console.log("space theme");
        }
        if(newFormat === 'warm'){
            console.log("warm theme");
        }
        if(newFormat === 'rain'){
            console.log("rain theme");
        }
        onChangeTheme(newFormat);
    }

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
        </div>
    )
};

export default Themes;