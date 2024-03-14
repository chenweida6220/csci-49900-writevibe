import React from "react";
import './Background.css'

const Background = ({src, alt}) => {
    const file_type = src.substr(src.lastIndexOf('.')); //get the file type
    //console.log(file_type);

    return (
        <div>     
        { file_type === '.mp4' || file_type === '.mov' || file_type === '.webm' ? (    //check if the link is for a video
           //if the link is for a video put a video
           <video className="backgroundstuff" src={src} autoPlay loop muted alt={alt}></video>
           ) : (
           //else put an image
           <img className="backgroundstuff" src={src} alt={alt} />
        )}
        </div>
    );
}

export default Background