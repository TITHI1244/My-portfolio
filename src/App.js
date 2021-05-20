import React from 'react';
import './App.css';
import BackgroundCanvas from './Components/BackgroundCanvas';
import Content from './Components/Content';
import Nav from './Components/Nav';
import ThemeProvider from './Components/ThemeContext';

function App() { 
  return (
    <ThemeProvider>
        <BackgroundCanvas />
        <Nav />
        <div className="app">
          <Content />       
        </div>      
    </ThemeProvider>
  );
}

export default App;
