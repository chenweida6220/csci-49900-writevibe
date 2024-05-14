import './App.css';
import React, { useState } from 'react'; // Make sure to import useState
import Quilljs from './Editor/main.js';
import Background from './Background/Background';
import { Box, ThemeProvider } from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Themes from './Themes/Themes.js';
import Settings from './Componenets/settings.js';
import { ThemeHandlerContext, EditorStyleProvider, ProgressHandlerContext } from './Context/ContextProvider';
import { SnackbarProvider } from 'notistack';

//need to put this here so the keystrokes don't duplicate
document.addEventListener('keydown', (e) => {
    //document.keystrokeSfx.cloneNode(true).play();
    //console.log(e.key);
    document.getElementById('audio').cloneNode(true).play();
    
});

function App() {
    const handle = useFullScreenHandle();

    //opacity slider
    const [opacity, setOpacity] = useState(90);  //100 is default opacity

    const [background, setBackground] = useState('/images/default.jpg'); // Default background

    const [editorBgColor, setEditorBgColor] = useState('#EEEEEE'); // Default Quill Editor Background Color

    const [editorOuterColor, setEditorOuterColor] = useState('#EEEEEE'); // Default Outer Box Color

    const [editorInnerColor, setEditorInnerColor] = useState('white'); // Default Inner Box Color

    const [editorToolbarColor, setToolbarColor] = useState('grey'); // Default Toolbar Color

    const [keystrokeSfx, setKeystrokeSfx] = useState('/audio/empty.wav');

    const [bgAudio, setBgAudio] = useState('null.mp3'); //Default background audio

    // Lifting up the state to change the theme
    const [format, setFormat] = useState('default');

    const [wordGoal, setWordGoal] = useState(0);
    const [goalEnabled, setGoalEnabled] = useState(false);

    //function to update the editor's background depending on the theme
    const themeColors = {
        default: {
            background: '/images/default.jpg',
            editorBgColor: '#EEEEEE',
            editorOuterColor: '#EEEEEE',
            editorInnerColor: 'white',
            editorToolbarColor: 'grey',
            keystrokeSfx: '/audio/empty.wav',
            bgAudio: '/audio/empty.wav',
            
        },
        space: {
            background: '/videos/deep-space.mp4',
            editorBgColor: 'blue',
            editorOuterColor: 'darkblue',
            editorInnerColor: '#20122B',
            editorToolbarColor: 'darkblue',
            keystrokeSfx: '/audio/purple.wav',
            bgAudio: '/audio/empty.wav',
            
        },
        warm: {
            background: '/videos/fireplace.mp4',
            editorBgColor: 'red',
            editorOuterColor: 'black',
            editorInnerColor: 'darkred',
            editorToolbarColor: 'black',
            keystrokeSfx: '/audio/keystroke.wav',
            bgAudio: '/audio/fireplace.mp3',
        },
        rain: {
            background: '/videos/rainy-window.mp4',
            editorBgColor: 'steelblue',
            editorOuterColor: 'steelblue',
            editorInnerColor: 'lightblue',
            editorToolbarColor: '#5CA9AC',
            keystrokeSfx: '/audio/purple.wav',
            bgAudio: '/audio/rain.mp3',
        },
        cafe: {
            background: '/images/cafe.jpg',
            editorBgColor: '#AC835C',
            editorOuterColor: 'tan',
            editorInnerColor: '#A28C6B',
            editorToolbarColor: 'tan',
            keystrokeSfx: '/audio/f.wav',
            bgAudio: '/audio/cafe.mp3',
        },
    };

    const changeEditorTheme = (theme) => {
        //update the background video
        setBackground(themeColors[theme].background || '/videos/deep-space.mp4');
        //update the background color
        setEditorBgColor(themeColors[theme].editorBgColor || '#20122b');
        //update the outer box of the theme
        setEditorOuterColor(themeColors[theme].editorOuterColor || 'darkblue');
        //update the inner box of the theme
        setEditorInnerColor(themeColors[theme].editorInnerColor || '#20122b');
        //update the toolbar color
        setToolbarColor(themeColors[theme].editorToolbarColor || 'darkblue');
        //update the typing sound
        setKeystrokeSfx(themeColors[theme].keystrokeSfx || '/audio/f.wav');
        //console.log(themeColors[theme]);
        setBgAudio(themeColors[theme].bgAudio || '');
    }


    const handleThemes = (newFormat) => {
        console.log("Theme changed to:", newFormat);
        setFormat(newFormat);
        changeEditorTheme(newFormat);
    };

    const changeBackground = (theme) => {
        setBackground(themeColors[theme].background);
    }

    const changeKeystrokeSfx = (theme) => {
        setKeystrokeSfx(themeColors[theme].keystrokeSfx);
    }

    const changeSoundscape = (theme) => {
        setBgAudio(themeColors[theme].bgAudio);
    }

    return (
    <ThemeHandlerContext.Provider value={{handleThemes}}>
        <ProgressHandlerContext.Provider value={{wordGoal, setWordGoal, goalEnabled, setGoalEnabled}}>
        <FullScreen handle={handle}>
            <SnackbarProvider>
            <div className="App">
                <Background src={background} />
                <audio id='audio' src={keystrokeSfx}></audio>
                <audio id='bgaudio' src={bgAudio} autoPlay loop></audio>
                {/*<audio id='audio' src={enterSfx}></audio>*/}
                <header className="App-header" style={{ opacity: opacity / 100 }}>
                    <ThemeProvider
                        theme={{
                            palette: {
                                primary: {
                                    border: '#000000',
                                    //passing stuff to progress bar
                                    main: format == "default" ? '#EEEEEE' : 
                                          format == "space" ? '#422ee8' : 
                                          format == "warm" ? '#AA0000' : 
                                          format == "rain" ? '#8eeffd' : 
                                          format == "cafe" ? '#fde494' : ''
                                }
                            },
                        }}
                    >
                        {/*first box is for the outer border surrounding the editor */}
                        <Box
                            sx={{
                                //width: "50%",
                                height: "100%",
                                margin: 1,
                                borderRadius: 2,
                                border: '3px solid primary.border',
                                bgcolor: editorOuterColor,
                                padding: 3,
                                //   opacity: .95,
                            }}
                        >
                            {/*second box contains the actual editor */}
                            <Box sx={{
                                bgcolor: editorInnerColor,
                            }}>
                              <EditorStyleProvider>
                                <Quilljs
                                    editorBgColor={editorBgColor}
                                    editorToolbarColor={editorToolbarColor}
                                />
                              </EditorStyleProvider>
                            </Box>
                        </Box>
                    </ThemeProvider>
                </header>
                <button id="fullscreentoggle" onClick={!handle.active ? handle.enter : handle.exit}>
                    Toggle fullscreen (temp button)
                </button>
                {/* opacity slider*/}
                <div style={{ position: 'fixed', left: '3.5%', top: '10%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={opacity}
                        onChange={(e) => setOpacity(e.target.value)}
                        style={{ '--value': opacity, marginBottom: '10px' }}
                    />
                    <span>Adjust Editor Opacity</span>
                </div>
                <Themes onChangeTheme={changeEditorTheme}></Themes>
            </div>
            </SnackbarProvider>
          <Settings 
            onChangeBackground={changeBackground}
            onChangeKeystrokeSfx={changeKeystrokeSfx}
            onChangeSoundscape={changeSoundscape}
          />
        </FullScreen>
        </ProgressHandlerContext.Provider>
      </ThemeHandlerContext.Provider>
    );
}

export default App;
