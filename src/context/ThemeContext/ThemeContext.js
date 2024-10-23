import React, { useEffect, useState, createContext } from "react";
import { ThemeProvider as theme } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ThemeContext = createContext({
    darkMode: true,
    toggleTheme: () =>null,
    theme: {}
});

export function ThemeProvider(props) { 
    const { children } = props;
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const data = {
        darkMode,
        toggleTheme,
        theme: {},
    };
    
    return (
        <ThemeContext.Provider value={data}>
            {children}
            {/* <Theme theme={null}>{children}</Theme> */}
        </ThemeContext.Provider>
    );
}