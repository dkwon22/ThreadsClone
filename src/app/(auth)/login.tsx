import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase'; 

export default function LoginScreen() {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    setErrors({
      email: emailError,
      password: passwordError,
      general: ''
    });
    
    return !emailError && !passwordError;
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }
    
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        Alert.alert( error.message);
        return;
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', error.message);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 justify-center bg-neutral-900 px-8"
    >
      <View className="w-full max-w-md mx-auto">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-white text-center mb-2">
            Welcome Back
          </Text>

        </View>

        {/* General Error Message */}
        {errors.general ? (
          <View className="bg-red-900/50 border border-red-500 rounded-lg p-3 mb-4">
            <Text className="text-red-300 text-center">{errors.general}</Text>
          </View>
        ) : null}

        {/* Email Input */}
        <View className="mb-4">
          <Text className="text-white text-base font-medium mb-2">Email</Text>
          <TextInput
            className={`bg-neutral-800 text-white px-4 py-4 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-neutral-700'
            } focus:border-blue-500`}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors(prev => ({ ...prev, email: '' }));
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
          />
          {errors.email ? (
            <Text className="text-red-400 text-sm mt-1">{errors.email}</Text>
          ) : null}
        </View>

        {/* Password Input */}
        <View className="mb-6">
          <Text className="text-white text-base font-medium mb-2">Password</Text>
          <TextInput
            className={`bg-neutral-800 text-white px-4 py-4 rounded-lg border ${
              errors.password ? 'border-red-500' : 'border-neutral-700'
            } focus:border-blue-500`}
            placeholder="Enter your password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors(prev => ({ ...prev, password: '' }));
            }}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
          />
          {errors.password ? (
            <Text className="text-red-400 text-sm mt-1">{errors.password}</Text>
          ) : null}
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className={`${isLoading ? 'bg-white' : 'bg-white'} py-4 rounded-lg mb-4 active:bg-gray-200`}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <View className="flex-row justify-center items-center">
              <ActivityIndicator color="black" size="small" className="mr-2" />
              <Text className="text-black text-center text-lg font-semibold">
                Logging in...
              </Text>
            </View>
          ) : (
            <Text className="text-black text-center text-lg font-semibold">
              Sign in
            </Text>
          )}
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity className="mb-8" disabled={isLoading}>
          <Text className="text-blue-400 text-center">
            Forgot your password?
          </Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View className="flex-row justify-center">
          <Text className="text-neutral-400">
            Don't have an account?{' '}
          </Text>
          <Link href="/signup" asChild>
            <TouchableOpacity disabled={isLoading}>
              <Text className="text-blue-400 font-medium">
                Create one
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
