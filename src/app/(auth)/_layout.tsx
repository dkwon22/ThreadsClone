import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

export default function AuthLayout() {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated) {
        return <Redirect href="/(protected)/" />
    }
    
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ title: 'Sign Up', headerBackButtonDisplayMode: 'minimal' }} />
        </Stack>
    )
}