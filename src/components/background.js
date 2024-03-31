import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, 
         Grid, Paper, Toolbar, Container, Link, Dialog, DialogContent, Box, InputLabel,
         MenuItem, FormControl, Select, TextField } from '@mui/material';
import { styled } from '@mui/system'; // replaces @mui/system/styles which is depreciated
import { ClassNames } from '@emotion/react';
import { useState } from 'react'; // React hook for functional components

import './background.css';
import backgroundimage from '../images/Bubblebackground.png';
import logoimage from '../images/Most-Fun-Writing-App_logo.png';
import settingsicon from '../images/Painterspalette.png';
import settingsmenuimage from '../images/Settingscanvas-1.png';

const BackgroundDiv = styled('div')({
    backgroundImage: `url(${backgroundimage})`,
    // backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    color: 'white',
    height: '100%',
    backgroundSize: '120%', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'repeat-y',
    minHeight: '100vh',
});

const FooterDiv = styled('div')({
  backgroundColor: '#10142c',
  width: '100%',
  height: '7%',
  position: 'fixed',
  bottom: '0',
  display: 'flex',
  justifyContent: 'space-around', 
  alignItems: 'center', 
});

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

function Background() {
    return (
      <BackgroundDiv>
        <CssBaseline />
        <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
          Hello World!
        </Typography>
  
        <main>
          <div>
            <Container maxWidth="xl">
              <Typography variant="h2" align="center" color="textSecondary" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Container>
          </div>
        </main>

        <Settings />
        <Footer />
        </BackgroundDiv>
    );
  }

function Footer() {
  return (
      <FooterDiv>
          <img src={logoimage} alt="logo" style={{ height: '100%', width: 'auto' }} />
          
          <Grid container justifyContent="space-around" spacing={2}>
            <Grid item>
              <Link className="harmattan-bold" href="#" underline="none" sx={{color: 'white', fontSize: '30px'}}>Link</Link>
            </Grid>
            <Grid item>
              <Link className="harmattan-bold" href="#" underline="none" style={{color: 'white', fontSize: '30px'}}>Privacy</Link>
            </Grid>
            <Grid item>
              <Link className="harmattan-bold" href="#" underline="none" sx={{color: 'white', fontSize: '30px'}}>Cookies</Link>
            </Grid>
          </Grid>
      </FooterDiv>
  );
}

function Settings() {
  // Handling state changes for the settings button
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
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
              <Grid item xs={12} md={6}>
                <HarmattanTypography variant="h6">Theme</HarmattanTypography>
                <Select sx={{ width: '80%' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
}
  
export default Background;
  