import "../../global.css"
 


import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";

const myTheme = { //create a new theme that inherits from the dark theme
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors, //copy all the colors from the dark theme
        primary: "green", //override the default color of the tab bar 
        card: "#101010", //override the default color of the background to black
    },
};

export default function RootLayout() {

    console.log("Root Layout rendered");

//import { ThemeProvider, DarkTheme } from "@react-navigation/native";
    return <ThemeProvider value={myTheme}> 
    <AuthProvider>
        <Slot />
    </AuthProvider>
    </ThemeProvider>;
}