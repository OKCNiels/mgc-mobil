import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider as Theme } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { lightTheme } from "./LightTheme";
import { darkTheme } from "./DarkTheme";

export const ThemeContext = createContext({
    darkMode: true,
    toggleTheme: () =>null,
    theme: {}
});

export function ThemeProvider(props) { 
    const { children } = props;
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const data = {
        darkMode,
        toggleTheme,
        theme: darkMode ? darkTheme:lightTheme,
    };
    
    return (
        <ThemeContext.Provider value={data}>
            <Theme theme={darkMode ? darkTheme:lightTheme}>{children}</Theme>
        </ThemeContext.Provider>
    );
}