import React, { createContext, useState } from 'react';

const defaultTheme = {
    darkTheme: false,
    toggleTheme: () => {},
  }
export const ThemeContext = createContext(defaultTheme)

const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    
    const toggleTheme = (event, lightTheme) => {      
        let darkTheme = !lightTheme
        setDarkTheme(darkTheme)      
    }
    
    return (
      <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
          {children}
      </ThemeContext.Provider>
    )
  }

export default ThemeProvider