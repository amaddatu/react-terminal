import React, { createContext, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const TerminalContext = createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useTerminal = () => useContext(TerminalContext);

// Creating our theme provider. Accepts an argument of "props"
export default function TerminalProvider(props) {
  const darkTheme = false;

  return <TerminalContext.Provider value={{ darkTheme }} {...props} />;
}
