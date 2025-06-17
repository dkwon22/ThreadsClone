import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';
import { MaterialIcons } from '@expo/vector-icons';


export default function ConfirmEmailScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [isResending, setIsResending] = useState(false);

  const handleResendEmail = async () => {
    if (!email) return;
    
    try {
      setIsResending(true);
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${process.env.EXPO_PUBLIC_APP_URL}/(auth)/confirmemail`
        }
      });

      if (error) throw error;
      
      Alert.alert('Success', 'Confirmation email resent successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to resend confirmation email. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <View className="flex-1 justify-center px-8">
        <View className="items-center mb-12">
          <Text className="text-white text-4xl font-bold mb-4">Check Your Email</Text>
          <Text className="text-neutral-400 text-center text-base">
            We've sent a confirmation link to {email || 'your email address'}.
            Please check your inbox and click the link to verify your account.
          </Text>
        </View>

        
        {/* Add the icon right here, between the header and the button */}
        <View className="items-center mb-8">
          <MaterialIcons name="mark-email-read" size={120} color="#3b82f6" />
        </View>


        <View className="mt-8">
          <TouchableOpacity
            className="bg-white py-4 rounded-lg mb-4"
            onPress={() => router.push('/login')}
          >
            <Text className="text-black text-center text-lg font-semibold">
              Back to Login
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center">
            <Text className="text-neutral-400">
              Didn't receive an email?{' '}
            </Text>
            <TouchableOpacity 
              onPress={handleResendEmail}
              disabled={isResending}
            >
              <Text className="text-blue-400 font-medium">
                {isResending ? 'Sending...' : 'Resend'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}