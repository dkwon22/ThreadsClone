import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

/**
 * TabsLayout Component
 * 
 * This file defines the main tab navigation structure of the application, serving as the primary
 * navigation container for the app's main sections. It's a crucial part of the app's architecture
 * that enables users to switch between different main views.
 * 
 * Key Features:
 * - Implements bottom tab navigation using expo-router's Tabs component
 * - Defines four main sections: Home, Search, Notifications, and Profile
 * - Uses Feather icons from @expo/vector-icons for tab bar icons
 * - Hides tab labels for a cleaner UI, showing only icons
 * 
 * Tab Structure:
 * 1. Home (index) - Main feed showing posts
 * 2. Search - Search functionality for users and content
 * 3. Notifications - User notifications and activity feed
 * 4. Profile - User profile and settings
 * 
 * Role in Application:
 * - Acts as the main navigation container for the app
 * - Provides consistent navigation across all main sections
 * - Integrates with expo-router for navigation management
 * - Maintains the app's navigation state
 * 
 * Styling:
 * - Uses a minimal design with icon-only tabs
 * - Implements dynamic color changes for active/inactive states
 * - Maintains consistent spacing and sizing across tabs
 * 
 * This layout is fundamental to the app's user experience, providing the primary
 * navigation structure that users interact with to access different sections
 * of the application.
 */

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