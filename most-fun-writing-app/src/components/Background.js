import React from "react"; 
import './Background.css';
import backgroundimage from '../images/Bubblebackground.png';
import logoimage from '../images/Most-Fun-Writing-App_logo.png';
// import canvasimage from '../images/Textboxcanvas-1.png';

const Background = () => {
    const Backgroundstyle = { // Define Backgroundstyle as an object
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: '110%',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: '10%',
        paddingBottom: '20%'
        // overflow: 'auto',
        // padding: '10%'
    }

  return (
    <div style={Backgroundstyle} className="background">
        <Canvas /> {/* For the canvas to be displayed on top of background */}
        <Footer /> {/* For the footer to be displayed on top of background */}
    </div>
  );
};

const Canvas = () => {
    const Canvasstyle = { // Define Canvasstyle as an object
        // backgroundImage: `url(${canvasimage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundSize: 'contain',
        // width: '70%', 
        // height: '70%',

        backgroundColor: '#dec9b5', // set the background color
        width: '50%',
        // height: '50%',
        height: '100vh',
        padding: '5%', 
        boxShadow: '30px 30px 20px grey',
        outlineColor: 'black',
        outlineStyle: 'solid',
        overflow: 'auto',
        margin: '10%',
    }

    return (
        <div style={Canvasstyle} className="canvas"></div>
    );
};

const Footer = () => {
    const Footerstyle = { // Define Footerstyle as an object
        backgroundColor: '#10142c',
        width: '100%',
        height: '7%',
        position: 'fixed',
        bottom: '0',
        // display: 'flex',
        // justifyContent: 'space-around', 
        // alignItems: 'center', 
    }

    return (
        // <div style={Footerstyle} className="footer">
        //     <img src={logoimage} alt="Most Fun Writing App logo" style={{width: '10%', height: '100%', float: 'left'}} />
        //     <h3 className="footerwords"><a href="https://fonts.google.com/selection/embed">Terms</a></h3>
        //     <h3 className="footerwords"><a href="https://fonts.google.com/selection/embed">Privacy</a></h3>
        //     <h3 className="footerwords"><a href="https://fonts.google.com/selection/embed">Cookies</a></h3>
        // </div>

        <footer style={Footerstyle}>
            {/* <img src={logoimage} alt="Most Fun Writing App logo" style={{width: '10%', height: '100%', float: 'left'}} /> */}
            <img src={logoimage} alt="Most Fun Writing App logo" style={{width: 'auto', height: '100%', position: 'absolute', left: '0'}} />
            <h3 className="footerwords harmattan-bold"><a href="https://fonts.google.com/selection/embed">Terms</a></h3>
            <h3 className="footerwords harmattan-bold"><a href="https://fonts.google.com/selection/embed">Privacy</a></h3>
            <h3 className="footerwords harmattan-bold"><a href="https://fonts.google.com/selection/embed">Cookies</a></h3>
        </footer>
    );
};

export default Background;

