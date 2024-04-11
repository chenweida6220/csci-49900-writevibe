import React, { useState, createContext, useContext } from 'react';

export const EditorStyleContext = createContext();

export function EditorStyleProvider({ children }) {
  const [editorStyle, setEditorStyle] = useState({
    lineHeight: '1.42',
    toolbarBgColor: 'none'
    // Add more styles here as needed
  });

  const changeStyle = (styleName, newValue) => {
    setEditorStyle(prevStyle => ({
      ...prevStyle,
      [styleName]: newValue,
    }));
  };
  return (
    <EditorStyleContext.Provider value={{ editorStyle, changeStyle }}>
      {children}
    </EditorStyleContext.Provider>
  );
}
