import React from 'react';
import { Typography, Grid, Dialog, DialogContent, Box,
          MenuItem, Select, TextField } from '@mui/material';
import { styled } from '@mui/system'; // replaces @mui/system/styles which is depreciated
import { useState, useContext } from 'react'; // React hook for functional components

import './background.css';
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
  backgroundColor: 'rgba(50,135,164,0.7)', // change this to the color you want
  },
});


const HarmattanTypography = styled(Typography)({
  fontFamily: 'Harmattan, sans-serif',
  fontWeight: 600,
  fontStyle: 'bold',
});


const Settings = () => {
  const [open, setOpen] = useState(false);
  const { handleThemes } = useContext(ThemeHandlerContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handling state changes for preset themes
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleThemeChange = (event) => {
    handleThemes(event.target.value);
    console.log("Attempting to change theme to: ", event.target.value);
  };
  
  return (
    <SettingsDiv>
      <button style={{border: 'none', background: 'none'}} onClick={handleClickOpen}>
        <img src={settingsicon} alt="Painter's palette icon" style={{width: '80%', height: '80%', opacity: '1'}} />
      </button>

      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' }}}>
      <DialogContent sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}>

          <Box sx={{ 
              width: '50vw',
              height: '50vh',
              maxWidth: '500px',
              maxHeight: '500px',
              backgroundColor: '#dec9b5',
              borderRadius: '15%',
              border: '2px solid black',
              padding: 5, 
              overflow: 'auto', // Add a scrollbar if the content overflows
              paddingLeft: 8,
            }}>
            
            <Grid container rowSpacing={0.5} columnSpacing={5} justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <HarmattanTypography variant="h4" align="center">Painter's Palette</HarmattanTypography>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Word Count Goal</HarmattanTypography>
                <TextField 
                  variant="outlined" 
                  sx={{ width: '80%' }} 
                  type="number"
                />
              </Grid>
              {/* Themes Selection */}
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Theme</HarmattanTypography>
                <Select sx={{ width: '80%' }}
                  label={currentTheme}
                  value={currentTheme}
                  //onChange={(event) => handleThemeChange(event)} // Update the current theme when the user selects a different theme
                  onChange={(event) => handleThemeChange(event)}
                >
                  {/* Add more MenuItems with a name that corresponds to a theme name in Themes.js */}
                  <MenuItem value='default'>Default</MenuItem>
                  <MenuItem value='space'>Space</MenuItem>
                  <MenuItem value='warm'>Warm</MenuItem>
                  <MenuItem value='rain'>Rain</MenuItem>
                  <MenuItem value='cafe'>Cafe</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Background</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Canvas</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Page Color</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Font</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Typing Sound</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Soundscape (Music)</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </SettingsDiv>
  );
};

export default Settings;
