import React, { createContext, useState, useContext } from 'react';

// Create a Context object
const ThemeContext = createContext();

export const ThemeHandlerContext = createContext();

// Create a custom hook that allows easy access to the theme
export const useTheme = () => useContext(ThemeContext);

export const EditorStyleContext = createContext();

export function EditorStyleProvider({ children }) {
  const [editorStyle, setEditorStyle] = useState({
    lineHeight: '1.42',
    // Add more styles here as needed
  });

  const [lineSpacing, setLineSpacing] = useState(240);

  const changeStyle = (styleName, newValue) => {
    setEditorStyle(prevStyle => ({
      ...prevStyle,
      [styleName]: newValue,
    }));
  };

  const changeLineSpacing = (value) => {
    setLineSpacing(value);
  };

  return (
    <EditorStyleContext.Provider value={{ editorStyle, changeStyle, lineSpacing, changeLineSpacing }}>
      {children}
    </EditorStyleContext.Provider>
  );
}

export const useThemeHandler = () => useContext(ThemeHandlerContext);
// Create a provider component that wraps your app and makes the theme available to all components
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    console.log("Theme changed to:", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Progress context stuff here because idk what i'm doing
const ProgressContext = createContext();
export const ProgressHandlerContext = createContext();

export const useWordGoal = () => useContext(ProgressContext);

export const ProgressContextProvider = ({ children }) => {
  const [wordGoal, setWordGoal] = useState(0);
  const [goalEnabled, setGoalEnabled] = useState(false);

  return (
    <ProgressContext.Provider value={{ wordGoal, setWordGoal, goalEnabled, setGoalEnabled }}>
      {children}
    </ProgressContext.Provider>
  )
}

//const IndividualThemeContext = createContext();
//export const IndividualThemeHandlerContext = createContext();



