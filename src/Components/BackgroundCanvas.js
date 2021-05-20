import React, { useEffect, useState } from "react";

// the symbols, we use regularly in coding
const symbols = ['+', '-', '<', '>', '#', '&', '*', '@', '!', '%', '$', '/', '{', '}', '[', ']', '(', ')', '^', '´', '|', '¨', ';', ',', '.', ':', '='];
// and binary code
const texts = [0, 1];
// letters to create random colors
const letters = '0123456789ABCDEF';

export default function BackgroundCanvas() {
    // the width & height are set to windows innerwidth & height initially and changes after resizing the window
    const [width, setWidth] = useState(window.innerWidth); 
    const [height, setHeight] = useState(window.innerHeight - 4);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    // after all the components mount, create a canvas element and set its width & height according to state
    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    // the timer to run for 5 seconds; first few seconds prints the symbols and later binary code
    const timer = setInterval(() => {
        if(time >= 100) {
            clearInterval(timer);
        } else if(time >= 30) {
            ctx.globalAlpha = 1;
            getRandomTexts(canvas, ctx, 'binary');
        }
        ctx.globalAlpha = 0.3; // reduces the symbols' opacity
        getRandomTexts(canvas, ctx, 'symbol');
        time++;
    }, 50);
    return () => {
        window.removeEventListener("resize", updateWidthAndHeight);
        clearInterval(timer);
    }
  }, []);

    let time = 0; // gets the track of timer
    const getRandomColor = () => {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const getRandomTexts = (canvas, ctx, textType) => {           
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        const fontSize = Math.random() * 50;
        ctx.fillStyle = getRandomColor();
        ctx.font = fontSize + 'px Arial';
        if(textType === 'symbol') {
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]; 
            ctx.fillText(randomSymbol, randomX, randomY);
        } else {
            const randomText = texts[Math.floor(Math.random() * texts.length)]; 
            ctx.fillText(randomText, randomX, randomY);
        }
    }
 
    return (
        React.createElement('canvas', {className: 'canvas', width: width, height: height}, null)
    )
}
