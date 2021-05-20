import React, { useContext, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Resume from './Resume';
import { ThemeContext } from './ThemeContext';

export default function Content() {
    const {darkTheme} = useContext(ThemeContext);
    const [display, setDisplay] = useState(false); 
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplay(!display);
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    },[])
   return(
       <div>
        {display ? 
            <div className={darkTheme ? "light-app" : "dark-app"}>
                <Header /> <hr />
                <Resume /> <hr />
                <Footer />
            </div> :
            <div></div>}     
        </div>  
   )
}
