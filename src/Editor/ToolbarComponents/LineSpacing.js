import React, { useState, useContext, useRef } from 'react';
import { ReactComponent as LineSpacingLogo } from "../line-spacing.svg"
import '../styles.module.css'
import { EditorStyleContext } from "../../Context/ContextProvider";
import LineSpacingIcon from './LineSpacingIconSVG';

const LineSpacing = () => {
 // const [lineHeight, setLineHeight] = useState('1.5');
  const [ selectValue, setSelectValue ] = useState("");
  const selectRef = useRef();
  const { editorStyle, changeStyle } = useContext(EditorStyleContext);

  const handleChange = (selectValue) => {
    setSelectValue(selectValue);
    const newLineHeight = selectValue;
    changeStyle('lineHeight', newLineHeight);
  }
  const handleButtonClick = () => {
    const newLineHeight = editorStyle.lineHeight === '1.42' ? '2.13' :  editorStyle.lineHeight ===  '2.13' ? '2.84' : '1.42';
    changeStyle('lineHeight', newLineHeight);
  }; 
  return (
    <>
    <span className="ql-formats">
       <button onClick={handleButtonClick}>
          {/*
          <LineSpacingLogo className="ql-spacing-icon" 
            style={{ width: '100%', height: '100%', boxSizing: "border-box" }}
            viewBox="2 2 20 20" 
          />
          */}
        <LineSpacingIcon />
      </button>
   
    </span>
    </>
  );
}
export default LineSpacing;
