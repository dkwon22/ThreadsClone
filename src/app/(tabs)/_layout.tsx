import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";


export default function TabsLayout() {
    return (
        // color of the icon when the tab is active
        // labels are not shown by default
    <Tabs screenOptions={{ tabBarShowLabel: false}}> 
        // title for each Tabs - how they're displayed in the tab bar
        <Tabs.Screen
            name="index" // name of the screen
            options={{
                title: "Home", // shown titleof the tab
                tabBarIcon: ({size,color}) => (
                    <Feather name="home" size={size} color={color} /> 
                ),
            }}
        />
        <Tabs.Screen
            name="search" 
            options={{
                title: "Search", 
                tabBarIcon: ({size,color}) => (
                    <Feather name="search" size={size} color={color} /> 
                ),
            }}
        />
        <Tabs.Screen 
            name="notifications" 
            options={{
                title: "Notifications", 
                tabBarIcon: ({size,color}) => (
                    <Feather name="heart" size={size} color={color} /> 
                ),
            }}
        />
        <Tabs.Screen 
            name="profile" 
            options={{
                title: "Profile", 
                tabBarIcon: ({size,color}) => (
                    <Feather name="user" size={size} color={color} /> 
                ),
            }}
        />
        </Tabs>
    );
}