import React, { useContext } from 'react';
import '../styles.module.css'
import { EditorStyleContext } from "../../Context/ContextProvider";

const LineSpacing = () => {

  const { editorStyle, changeStyle, changeLineSpacing } = useContext(EditorStyleContext);
  const [lineSpacing, setLineSpacing] = React.useState(1); 
  const handleButtonClick = () => {
    let newLineHeight;
    let newLineSpacing;

    if (editorStyle.lineHeight === '1.42') {
      newLineHeight = '2.13';
      newLineSpacing = 360;
      setLineSpacing(1.5);
    } else if (editorStyle.lineHeight === '2.13') {
      newLineHeight = '2.84';
      newLineSpacing = 480;
      setLineSpacing(2);
    } else {
      newLineHeight = '1.42';
      newLineSpacing = 240;
      setLineSpacing(1);
    }

    changeStyle('lineHeight', newLineHeight);
    changeLineSpacing(newLineSpacing);
  }; 

  return (
    <>
    <span className="ql-formats" style={{ marginRight: '1px', paddingTop: '12px' }}>
       <button onClick={handleButtonClick}>
        <svg style={{ boxSize: "border-box" }} viewBox="0 3 18 18" >
          <path class="ql-fill" d="M10,8h11c0.6,0,1-0.4,1-1s-0.4-1-1-1H10C9.4,6,9,6.4,9,7S9.4,8,10,8z M5.7,15.3V8.7C5.9,8.9,6.1,9,6.3,9C6.6,9,6.8,8.9,7,8.8c0.4-0.4,0.5-1,0.1-1.4l-1.7-2C5.2,5.1,5,5,4.7,5S4.1,5.1,3.9,5.4l-1.7,2c-0.3,0.4-0.3,1,0.2,1.4c0.4,0.3,0.9,0.3,1.3,0v6.6c-0.4-0.3-0.9-0.4-1.3,0c-0.4,0.4-0.5,1-0.1,1.4l1.7,2C4.1,18.9,4.4,19,4.7,19s0.6-0.1,0.8-0.4l1.7-2c0.4-0.4,0.3-1.1-0.1-1.4C6.6,14.9,6,14.9,5.7,15.3z M21,11H10c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c0.6,0,1-0.4,1-1S21.6,11,21,11z M21,16H10c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c0.6,0,1-0.4,1-1S21.6,16,21,16z"/>
        </svg>
      </button> 
      <div style={{ fontSize: '9px', textAlign: 'center', color:'#444'}}>{lineSpacing}</div>
    </span>
    </>
  );
}
export default LineSpacing;
