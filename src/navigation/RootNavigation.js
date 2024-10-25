import { SafeAreaView, Text } from "react-native";
import {  Button } from "react-native-elements";
import { useTheme } from "../hooks";

export function RootNavigation(){
    const { darkMode, toggleTheme } = useTheme();

    return (
        <SafeAreaView>
            <Text>Estamos en RootNavigation</Text>
            <Text>Estamos en {darkMode?"DaskMode":"LightMode"}</Text>
            <Button title={darkMode ? "Activar Light Mode" : "Activar DarkMode"} onPress={toggleTheme}></Button>
        </SafeAreaView>
    );
}