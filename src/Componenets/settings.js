import React from 'react';
import { Typography, Grid, Dialog, DialogContent, Tabs, Tab, Box,
          Button, MenuItem, Select, TextField } from '@mui/material';
import { styled } from '@mui/system'; // replaces @mui/system/styles which is depreciated
import { useState, useContext } from 'react'; // React hook for functional components

import './Settings.css';
import settingsicon from '../Images/Painterspalette.png';
import { ThemeHandlerContext } from '../Context/ContextProvider';


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

  const [value, setValue] = React.useState(0);

  const handleTabSwitch = (event, newValue) => {
    setValue(newValue);
  };
  
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
          <Tabs value={value} onChange={handleTabSwitch} centered>
            <Tab label="Customization" className="MuiLink-root harmattan-bold" />
            <Tab label="General" className="MuiLink-root harmattan-bold" />
          </Tabs>

          {value === 0 && 
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















          {value === 1 && 
          <Grid container rowSpacing={0.5} columnSpacing={5} item xs={12} 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            {/* OPACITY SLIDER */}


            <Grid item xs={12}>
              <Button variant="outlined">Upload File</Button>
            </Grid>
          
          
          </Grid>}














        </DialogContent>
      </Dialog>
    </SettingsDiv>

  );
};

export default Settings;
