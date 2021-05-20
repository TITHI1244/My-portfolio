import React from 'react';
import { ThemeContext } from './ThemeContext';

export default function ToggleThemeButton() {
    const { darkTheme, toggleTheme} = React.useContext(ThemeContext);
  
    return(
      <button className="button" onClick={event => toggleTheme(event, darkTheme)}>
        {darkTheme ? "Too bright??" : "Too dark??"}
      </button>
    )
}
