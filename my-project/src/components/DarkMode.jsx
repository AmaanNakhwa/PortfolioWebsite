import React from "react";
import { useDarkMode } from './DarkModeContext';
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";
import "./DarkMode.css";

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleDarkMode} // This should call the toggleDarkMode function
                checked={isDarkMode} // This should reflect the current dark mode state
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;