import React, { useState } from "react";
import './Themes.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PaletteIcon from '@mui/icons-material/Palette';

//css for settings window
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #EEE',
    borderRadius: 2,
    boxShadow: 12,
    p: 3, //padding
};

const Themes = ({ onChangeTheme }) => {

    const [format, setFormat] = useState('space');

    const handleThemes = (newFormat) => {
        console.log("Theme changed to:", newFormat);
        setFormat(newFormat);
        onChangeTheme(newFormat);
    };

    //for settings menu
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="themeTypes">
        {/*
            <PaletteIcon 
                id="paletteIcon" 
                onClick={handleOpen}
                fontSize='large'
                sx={{ color: 'white' }}
            >
            </PaletteIcon>  
            */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Settings
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <label>Preset Themes: </label>
                    <select name="preset" id="preset">
                        <option 
                            value="default"
                            className={format === 'default' ? 'active' : ''}
                            onClick={() => handleThemes('default')}
                        >
                            Default
                        </option>
                        <option 
                            value="space"
                            className={format === 'space' ? 'active' : ''}
                            onClick={() => handleThemes('space')}
                        >
                            Space
                        </option>
                        <option 
                            value="warm"
                            className={format === 'warm' ? 'active' : ''}
                            onClick={() => handleThemes('warm')}
                        >
                            Warm
                        </option>
                        <option 
                            value="rain"
                            className={format === 'rain' ? 'active' : ''}
                            onClick={() => handleThemes('rain')}
                        >
                            Rain
                        </option>
                        <option 
                            value="cafe"
                            className={format === 'cafe' ? 'active' : ''}
                            onClick={() => handleThemes('cafe')}
                        >
                            Cafe
                        </option>
                        <option 
                            value="forest"
                            className={format === 'forest' ? 'active' : ''}
                            onClick={() => handleThemes('forest')}
                        >
                            Forest
                        </option>
                        <option 
                            value="lofi"
                            className={format === 'lofi' ? 'active' : ''}
                            onClick={() => handleThemes('lofi')}
                        >
                            lofi
                        </option>
                    </select>
                    <br />
                </Typography>

                </Box>
            </Modal>
        </div>
    )
};

export default Themes;
