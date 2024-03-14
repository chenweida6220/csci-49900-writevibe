import './App.css';
import Quilljs from './Editor/main.js'
import Background from './Background/Background';
import { Box, ThemeProvider } from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
    <div className="App">
      <Background src = 'https://www.desktophut.com/files/1668458437-1668458437-lofi-girl-study-live-wallpaper.mp4'/>
      <header className="App-header"> 
      <ThemeProvider
          theme={{
              palette: {
                  primary: {
                      //main: '#65B6EF',
                      main: '#EEEEEE',
                      border: '#000000',
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
              bgcolor: 'primary.main',
              padding: 3,
              }}
          >
              {/*second box contains the actual editor */}
              <Box sx={{ bgcolor: 'white',}}>
                <Quilljs />
              </Box>
          </Box>
        </ThemeProvider>
        </header>
        <button id="fullscreentoggle" onClick={!handle.active ? handle.enter : handle.exit}>
          Toggle fullscreen (temp button)
        </button>
    </div>
    </FullScreen>
  );
}

export default App;