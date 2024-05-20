import React from "react";
import './Background.css'

const Background = ({src, alt}) => {
    //console.log(src);
    //const file_type = src.substr(src.lastIndexOf('.')); //get the file type

    //if (typeof src == 'string') console.log("true");
    //else console.log('false');
    //var file_type = '';

    //if (src.includes('blob')) console.log('true'); else console.log('false');

    //user uploaded file
    if (typeof src != 'string') {
        const bgUrl = window.URL.createObjectURL(src);
        return (
            <div>
                { src.type == 'video/*' ? 
                    <video className="backgroundstuff" autoPlay loop muted alt={alt}>
                        <source src={bgUrl}></source>
                    </video> : 
                    <img className="backgroundstuff" src={bgUrl} alt={alt} />
                }
            </div>
        );
        
    }
    //our own file
    else {
        const file_type = src.substr(src.lastIndexOf('.')); //get the file type
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
    
}

export default Background