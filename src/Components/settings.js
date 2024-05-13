import React from 'react';
import { Typography, Grid, Dialog, DialogContent, Tabs, Tab, Box,
          Button, Slider, Stack, IconButton, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system'; // replaces @mui/system/styles which is depreciated
import { useState, useContext } from 'react'; // React hook for functional components

import './Settings.css';
import settingsicon from '../Images/Painterspalette.png';
import { ThemeHandlerContext } from '../Context/ContextProvider';

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
  backgroundColor: 'rgba(50,135,164,0.7)', 
  },
});

const BoldHarmattanTypography = styled(Typography)({
  fontFamily: 'Harmattan, sans-serif',
  fontWeight: 600,
  fontStyle: 'bold',
});

function SettingsOption({ label, options, value, onChange }) {
  return (
    <Grid className="settingsGridItem" item xs={12} md={6}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <BoldHarmattanTypography variant="h6">{label}</BoldHarmattanTypography>
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


const Settings = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [background, setBackground] = useState('placeholder1');
  const [canvas, setCanvas] = useState('placeholder2');
  const [pageColor, setPageColor] = useState('placeholder3');
  const [font, setFont] = useState('placeholder4');
  const [typingSound, setTypingSound] = useState('placeholder5'); 
  const [soundscape, setSoundscape] = useState('placeholder6');

  const { handleThemes } = useContext(ThemeHandlerContext);

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

  // Handling opacity slider
  const [opacityvalue, setOpacityValue] = React.useState(30);
  // Handles both numbers and event objects
  const handleOpacity = (newOpacityValue) => {
    if (typeof newOpacityValue === 'number') {
      setOpacityValue(newOpacityValue);
    } 
    else if (newOpacityValue && newOpacityValue.target) {
      setOpacityValue(newOpacityValue.target.value);
    }
  };

  // Handling button active state
  const [selectedButton, setSelectedButton] = useState(null);
  
  // Handling state changes for preset themes
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleThemeChange = (event) => {
    handleThemes(event.target.value);
    setCurrentTheme(event.target.value);
    setIsOpen(false);
    setOpen(false);
    console.log("Attempting to change theme to: ", event.target.value);
  };

  const themes = [
    { value: 'default', label: 'Default' },
    { value: 'space', label: 'Space' },
    { value: 'warm', label: 'Warm' },
    { value: 'rain', label: 'Rain' },
    { value: 'cafe', label: 'Cafe' },
    // Add more themes here
  ];
  
  const backgroundOptions = [
    { value: 'placeholder1', label: 'Placeholder1' },
  ];

  const canvasOptions = [
    { value: 'placeholder2', label: 'Placeholder2' },
  ];

  const pageColorOptions = [
    { value: 'placeholder3', label: 'Placeholder3' },
  ];

  const fontOptions = [
    { value: 'placeholder4', label: 'Placeholder4' },
  ];

  const typingSoundOptions = [
    { value: 'placeholder5', label: 'Placeholder5' },
  ];

  const soundscapeOptions = [
    { value: 'placeholder6', label: 'Placeholder6' },
  ];

  return (
    <SettingsDiv>
      <button style={{border: 'none', background: 'none'}} onClick={handleClickOpen}>
        <img src={settingsicon} alt="Painter's palette icon" style={{width: '80%', height: '80%', opacity: '1'}} />
      </button>

      <Dialog open={open} onClose={handleClose} 
        PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' }}}>
        <DialogContent className="settingsBox">
          <Tabs value={tab} onChange={handleTabSwitch} centered>
            <Tab label="Customization" className="MuiLink-root harmattan-bold" />
            <Tab label="General" className="MuiLink-root harmattan-bold" />
          </Tabs>

          {/* Customization Tab */}
          {tab === 0 && 
          <Grid container rowSpacing={0.5} columnSpacing={5} justifyContent="center" alignItems="center">
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
                onChange={setBackground}
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
                onChange={setTypingSound}
              />
              <SettingsOption
                label="Soundscape (Music)"
                options={soundscapeOptions}
                value={soundscape}
                onChange={setSoundscape}
              />
          
          </Grid>}



          {/* General Tab */}
          {tab === 1 && 
          <Grid container rowSpacing={2} columnSpacing={5} item xs={12} 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            {/* OPACITY SLIDER */}
            <Grid item sx={{ width: 300 }}>
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <IconButton aria-label="opacity 0%">
                  <InvertColorsOffIcon onClick={() => handleOpacity(0)} />
                </IconButton>

                <Slider aria-label="Volume" value={opacityvalue} onChange={handleOpacity} />

                <IconButton aria-label="opacity 100%">
                  <OpacityIcon onClick={() => handleOpacity(100)}/>
                </IconButton>
              </Stack>
            </Grid>


            <Grid item xs={12}>
              <Button variant='contained' startIcon={<CloudUploadIcon />}>Upload File</Button>
            </Grid>

            <Grid item xs={12}>
              <Button variant={selectedButton === 'DOCX' ? "contained" : "outlined"}
                onClick={() => setSelectedButton('DOCX')}>
                  DOCX
              </Button>
              <Button variant={selectedButton === 'TXT' ? "contained" : "outlined"}
                onClick={() => setSelectedButton('TXT')}>
                  TXT
              </Button>
              <Button variant={selectedButton === 'PDF' ? "contained" : "outlined"}
                onClick={() => setSelectedButton('PDF')}>
                  PDF
              </Button>
              <Button variant="contained" endIcon={<GetAppIcon />}>Export File</Button>
            </Grid>
          
          
          </Grid>}














        </DialogContent>
      </Dialog>
    </SettingsDiv>

  );
};

export default Settings;
