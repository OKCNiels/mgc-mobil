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
    const [darkMode, setDarkMode] = useState(true);

    //obtener el tema guardado
    useEffect(() => {
        
        (async () => {
            const response = await AsyncStorage.getItem("theme");
            console.log(response);
            if (response) setDarkMode(JSON.parse(response));
            
        })();
    }, []);
    
    //guardar el valor del tema en el storage del celular
    const toggleTheme = async () => {
        setDarkMode(!darkMode);
        await AsyncStorage.setItem("theme",JSON.stringify(!darkMode));
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