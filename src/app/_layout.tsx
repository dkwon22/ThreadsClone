import "../../global.css"
 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <Slot />
        </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>;
}