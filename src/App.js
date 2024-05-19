import './App.css';
import React, { useState, useEffect, useRef } from 'react'; // Make sure to import useState
import Quilljs from './Editor/main.js';
import Background from './Background/Background';
import { Box, ThemeProvider, IconButton } from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Themes from './Themes/Themes.js';
import Settings from './Components/settings.js';
import { ContextHandler, EditorStyleProvider } from './Context/ContextProvider';
import { SnackbarProvider } from 'notistack';
import Audio from './Audio/Audio.js';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

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
    const [sfxVolume, setSfxVolume] = useState(0.5); 

    const [bgAudio, setBgAudio] = useState('null.mp3'); //Default background audio
    const [bgVolume, setBgVolume] = useState(0.5);

    // Lifting up the state to change the theme
    const [format, setFormat] = useState('default');
    const [ quillEditor, setQuillEditor] = useState(null);

    const [wordGoal, setWordGoal] = useState(0);
    const [goalEnabled, setGoalEnabled] = useState(false);

    const [delta, setDelta] = useState(null);

    //function to update the editor's background depending on the theme
    const themeColors = {
        default: {
            background: '/images/default.jpg',
            editorBgColor: '#EEEEEE',
            editorOuterColor: '#EEEEEE',
            editorInnerColor: 'white',
            editorToolbarColor: 'grey',
            keystrokeSfx: '/audio/empty.wav',
            
        },
        space: {
            background: '/videos/deep-space.mp4',
            editorBgColor: 'blue',
            editorOuterColor: 'darkblue',
            editorInnerColor: '#20122B',
            editorToolbarColor: 'darkblue',
            keystrokeSfx: '/audio/purple.wav', 
            bgAudio: '/audio/empty.wav'
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
        setFormat(newFormat);
        changeEditorTheme(newFormat);
        changeTextColor(newFormat);
    };

    const changeTextColor = (theme) => {
      const length = quillEditor.getLength();
      const currentPos = quillEditor.getSelection();
      const currentColor = quillEditor.getFormat(currentPos).color;
      quillEditor.setSelection(0, length);
      if (theme === 'warm' || theme === 'space') {
        quillEditor.format('color', '#FFFFFF');
      }
      else {
        quillEditor.format('color', currentColor);
      } 
      quillEditor.setSelection(currentPos);
    }

    const changeBackground = (theme) => {
        setBackground(themeColors[theme].background);
    };

    const changeKeystrokeSfx = (theme) => {
        setKeystrokeSfx(themeColors[theme].keystrokeSfx);
    };

    const changeSoundscape = (theme) => {
        setBgAudio(themeColors[theme].bgAudio);
    };

    const changePageColor = (color) => {
        setEditorBgColor(color);
    }

    const changeOuterBorder = (color) => {
        setEditorOuterColor(color);
    }

    const changeInnerBorder = (color) => {
        setEditorInnerColor(color);
    }

    const changeToolbarColor = (color) => {
        setToolbarColor(color);
    }

    const handleOpacity = (opacity) => {
    if (typeof opacity === 'number') {
        setOpacity(opacity);
    }
    else if (opacity && opacity.target) {
        setOpacity(opacity.target.value);
    }
  }

  const handleBgVolume = (volume) => {
    if (typeof volume === 'number') {
      setBgVolume(volume);
    }
    else if (volume && volume.target) {
      setBgVolume(volume.target.value);
    }
  }
  
  const handleSfxVolume = (volume) => {
    if (typeof volume === 'number') {
      setSfxVolume(volume);
    }
    else if (volume && volume.target) {
      setSfxVolume(volume.target.value);
    }
  }

    return (
    <ContextHandler.Provider 
      value={{ handleThemes, handleOpacity, wordGoal, setWordGoal, 
              goalEnabled, setGoalEnabled, delta, setDelta, quillEditor, 
              setQuillEditor, handleBgVolume, handleSfxVolume }}>
        <FullScreen handle={handle}> 
        <EditorStyleProvider>
          <SnackbarProvider>
            <div className="App">
                <Background src={background} />
                <Audio
                    keystrokeSfx={keystrokeSfx}
                    sfxVolume={sfxVolume}
                    bgAudio={bgAudio}
                    bgVolume={bgVolume}
                />
                {/*<audio id='audio' src={enterSfx}></audio>*/}
                <header className="App-header" style={{ opacity: opacity / 100 }}>
                  <div className="ContainerSurrounder" style={{ width: '75%' }}>
                    <ThemeProvider
                        theme={{
                            palette: {
                                primary: {
                                    border: 'black',
                                    //main: '#65B6EF',
                                    main: format === "default" ? '#EEEEEE':
                                          format === "space" ? '#422ee8':
                                          format === "warm" ? '#AA0000':
                                          format === "rain" ? '#8eeffd':
                                          format === "cafe" ? '#fde494': ''
                                },
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
                                <Quilljs
                                    editorBgColor={editorBgColor}
                                    editorToolbarColor={editorToolbarColor}
                                />
                            </Box>
                        </Box>
                    </ThemeProvider>
                  </div>
                </header>
                <IconButton id="fullscreentoggle" aria-label="Keystroke Volume 0%">
                  <FullscreenIcon onClick={!handle.active ? handle.enter : handle.exit} />
                </IconButton>
                <Themes onChangeTheme={changeEditorTheme}></Themes>
            </div>
            </SnackbarProvider>
          <Settings 
            onChangeBackground={changeBackground}
            onChangeKeystrokeSfx={changeKeystrokeSfx}
            onChangeSoundscape={changeSoundscape}
            onChangePageColor={changePageColor}
            onChangeOuterBorder={changeOuterBorder}
            onChangeInnerBorder={changeInnerBorder}
            onChangeToolbarColor={changeToolbarColor}
            delta={delta}
          />
        </EditorStyleProvider>
        </FullScreen>
      </ContextHandler.Provider>
    );
}

export default App;
