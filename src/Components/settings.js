import React from 'react';
import { Typography, Grid, Dialog, DialogContent, Tabs, Tab,
          Button, Slider, Stack, IconButton, MenuItem, Select, TextField } from '@mui/material';
import { styled } from '@mui/system'; // replaces @mui/system/styles which is depreciated
import { useState, useContext } from 'react'; // React hook for functional components

import './Settings.css';
import settingsicon from '../Images/Painterspalette.png';
import Export from '../Exporter/Export';
import Import from '../Importer/Import'
import { ContextHandler } from '../Context/ContextProvider';

import OpacityIcon from '@mui/icons-material/Opacity';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GetAppIcon from '@mui/icons-material/GetApp';

const SettingsDiv = styled('div')({
  backgroundColor: 'rgba(211, 211, 211, 0.5)', // rbga format instead of the opacity property to not affect image opacity
  width: '150px',
  height: '150px',
  position: 'fixed',
  bottom: '7%',
  right: '0',
  borderRadius: '50%', // make the div circular
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: '10px',
  padding: '10px',
  '&:hover': {
  backgroundColor: 'rgba(50,135,164,0.7)', // change this to the color you want
  },
});


const HarmattanTypography = styled(Typography)({
  fontFamily: 'Harmattan, sans-serif',
  fontWeight: 600,
  fontStyle: 'bold',
});

function SettingsOption({ label, options, value, onChange }) {
  return (
    <Grid className="settingsGridItem" item xs={12} md={6}>
      <HarmattanTypography variant="h6">{label}</HarmattanTypography>
      <Select sx={{ width: '80%' }} value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
}


const Settings = ({onChangeBackground, onChangeKeystrokeSfx, onChangeSoundscape}) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [background, setBackground] = useState('default');
  const [canvas, setCanvas] = useState('placeholder2');
  const [pageColor, setPageColor] = useState('placeholder3');
  const [font, setFont] = useState('placeholder4');
  const [typingSound, setTypingSound] = useState('default'); 
  const [soundscape, setSoundscape] = useState('default');

  const { handleThemes, handleOpacity, wordGoal, setWordGoal, goalEnabled, setGoalEnabled } = useContext(ContextHandler);
  const handleClose = () => {
    setIsOpen(false);
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
    setIsOpen(true);
  };
  
  // Handling settings tab switch
  const [tab, setTab] = React.useState(0);
  const handleTabSwitch = (event, newTab) => {    
    setTab(newTab);  
  };
  
  
  // Handling Opacity Slider
  const [opacityValue, setOpacityValue] = React.useState(90);
  // Handle both numbers and event objects
  const handleOpacityChange = (opacityValue) => {
      handleOpacity(opacityValue.target.value);
      setOpacityValue(opacityValue.target.value);
  }

  // Handling button active state
  const [selectedButton, setSelectedButton] = useState(null);

  // Handling state changes for preset themes
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleThemeChange = (event) => {
    handleThemes(event.target.value);
    setCurrentTheme(event.target.value);
    setBackground(event.target.value);
    setTypingSound(event.target.value);
    setSoundscape(event.target.value);
    setIsOpen(false);
    setOpen(false);
    console.log("Attempting to change theme to: ", event.target.value);
  }

  const handleBackgroundChange = (event) => {
    onChangeBackground(event.target.value);
    setBackground(event.target.value);
    setIsOpen(false);
    setOpen(false);
  }

  const handleKeystrokeSfxChange = (event) => {
    onChangeKeystrokeSfx(event.target.value);
    setTypingSound(event.target.value);
    setIsOpen(false);
    setOpen(false);
  }

  const handleSoundscapeChange = (event) => {
    onChangeSoundscape(event.target.value);
    setSoundscape(event.target.value);
    setIsOpen(false);
    setOpen(false);
  }

  const handleWordGoal = () => {
    setWordGoal(document.getElementById('goalvalue').value);
    setGoalEnabled(true);

    var bar = document.getElementById('progress-bar');
    bar.style.display = 'inherit';

    setIsOpen(false);
    setOpen(false);
  }

  const themes = [
    { value: 'default', label: 'Default' },
    { value: 'space', label: 'Space' },
    { value: 'warm', label: 'Warm' },
    { value: 'rain', label: 'Rain' },
    { value: 'cafe', label: 'Cafe' },
    // Add more themes here
  ];
  
  const backgroundOptions = [
    { value: 'default' , label: 'Default' },
    { value: 'space', label: 'Space' },
    { value: 'warm', label: 'Warm' },
    { value: 'rain', label: 'Rain' },
    { value: 'cafe', label: 'Cafe' },
  ];

  const canvasOptions = [
    { value: 'placeholder2', label: 'Placeholder2' },
  ];

  const typingSoundOptions = [
    { value: 'default', label: 'Default' },
    { value: 'space', label: 'Sparkly' },
    { value: 'warm', label: 'Typewriter' },
    { value: 'rain', label: 'Keyboard 1' },
    { value: 'cafe', label: 'Keyboard 2' },
  ];

  const soundscapeOptions = [
    { value: 'default', label: 'Default' },
    { value: 'space', label: 'Space (No Sound)' },
    { value: 'warm', label: 'Fireplace' },
    { value: 'rain', label: 'Raindrops' },
    { value: 'cafe', label: 'Cafe Interior' },
  ];

  const pageColorOptions = [
    { value: 'placeholder3', label: 'Placeholder3' },
  ];

  const fontOptions = [
    { value: 'placeholder4', label: 'Placeholder4' },
  ];

  return (
    <SettingsDiv>
      <button style={{border: 'none', background: 'none'}} onClick={handleClickOpen}>
        <img src={settingsicon} alt="Painter's palette icon" style={{width: '80%', height: '80%', opacity: '1'}} />
      </button>

      <Dialog open={open} onClose={handleClose} 
                    PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' }}}>
      <DialogContent className="settingsBox" >
          <Tabs value={tab} onChange={handleTabSwitch} centered>
            <Tab label="Customization" className="MuiLink-root harmatton-bold" />
            <Tab label="General" className="MuiLink-root harmatton-bold" />
          </Tabs>
          { tab === 0 && 
            <Grid container rowSpacing={0.5} columnSpacing={5} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Word Count Goal</HarmattanTypography>
                <TextField
                  variant="outlined"
                  sx={{ width: '80%' }}
                  type="number"
                  id='goalvalue'
                />
                <button onClick={handleWordGoal}>Set Goal</button>
              </Grid>
              <SettingsOption
                label="Theme"
                options={themes}
                value={currentTheme}
                onChange={handleThemeChange}
              />
              <SettingsOption
                label="Background"
                options={backgroundOptions}
                value={background}
                onChange={handleBackgroundChange}
              />
              <SettingsOption 
                label="Canvas"
                options={canvasOptions}
                value={canvas}
                onChange={setCanvas}
              />
              <SettingsOption
                label="Page Color"
                options={pageColorOptions}
                value={pageColor}
                onChange={setPageColor}
              />
              <SettingsOption
                label="Font"
                options={fontOptions}
                value={font}
                onChange={setFont}
              />
              <SettingsOption
                label="Typing Sound"
                options={typingSoundOptions}
                value={typingSound}
                onChange={handleKeystrokeSfxChange}
              />
              <SettingsOption
                label="Soundscape (Music)"
                options={soundscapeOptions}
                value={soundscape}
                onChange={handleSoundscapeChange}
              />
            </Grid>
          } {/* tab === 0 */}
      {/* General Tab */}
      { tab === 1 && 
      <Grid container rowSpacing={2} columnSpacing={5} item xs={12}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid item sx={{ width:300 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <IconButton aria-label="opacity 0%">
              <InvertColorsOffIcon onClick={() => handleOpacityChange({ target : {value: 0}})} />
            </IconButton>

            <Slider aria-label="Volume" value={opacityValue} onChange={handleOpacityChange} />

           <IconButton aria-label="opacity 100%"> 
              <OpacityIcon onClick={() => handleOpacityChange({ target : {value: 100}})}/>
           </IconButton>
          </Stack>
        </Grid>
        {/*
        <Grid item xs={12}>
          <Button variant='contained' startIcon={<CloudUploadIcon />}>Upload File </Button>
        </Grid>
        */}
        <Import />
        <Export selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
        {/*
        <Grid item xs={12}>
          <Button variant={selectedButton === 'DOCX' ? "contained" : "outlined"}
            onCLick={() => setSelectedButton('DOCX')}>DOCX</Button>

          <Button variant={selectedButton === 'TXT' ? "contained" : "outlined"}
            onCLick={() => setSelectedButton('TXT')}>TXT</Button>

          <Button variant={selectedButton === 'PDF' ? "contained" : "outlined"}
            onCLick={() => setSelectedButton('PDF')}>PDF</Button>

          <Button variant="contained" endIcon={<GetAppIcon />} onClick={handleExport}>Export File</Button>
        </Grid>
            */}    
      </Grid>
      } {/* tab === 1 */}
        </DialogContent>
      </Dialog>
    </SettingsDiv>
  );
};

export default Settings;
