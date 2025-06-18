import { useState } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import {useMutation} from '@tanstack/react-query';
import { router } from "expo-router";
import { Alert } from "react-native";
import { useQueryClient } from "@tanstack/react-query";

const createPost = async (content: string, user_id: string) => {
    const { data } = await supabase.from('posts').insert({
        content,
        user_id,
    }).select('*').throwOnError();
    return data;
};

export default function NewPostScreen() {
    const [text, setText] = useState('');
    const { user } = useAuth();
    const queryClient = useQueryClient();


    const { mutate, isPending, error } = useMutation({
        mutationFn: () => createPost(text, user!.id),
        onSuccess: (data) => {
            setText('');
            router.back();
            queryClient.invalidateQueries({queryKey: ['posts']})
        },
        onError: (error) => {
            //Alert.alert('Error', error.message);
        },
    }); 

    // const onSubmit = async () => {
    //     if (!text || !user) return;
    //     const { data, error } = await supabase.from('posts').insert({
    //         content: text,
    //         user_id: user.id,
    //         });

    //     if (error) {
    //         console.error('Error creating post:', error);
    //         Alert.alert('Error', error.message);
    //         return;
    //     }
    //     setText('');
    // }
    return (
        <SafeAreaView edges={['bottom']} className="p-4 flex-1">
            <KeyboardAvoidingView 
            className="flex-1" 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
            >
                <Text className="text-white text-lg font-bold">username</Text>

                <TextInput
                value={text}
                onChangeText={setText}
                placeholder="What's on your mind?"
                placeholderTextColor="gray"
                className="text-white text-lg"
                multiline
                numberOfLines={4}
                />
                
                {error && <Text className="text-red-500">{error.message}</Text>}

                <View className="mt-auto">
                    <Pressable 
                    onPress={() => mutate()}
                    disabled={isPending}
                    className = {`${
                        isPending ?  ' bg-white/50' : 'bg-white'} p-3 px-6 self-end rounded-full`}
                    >
                        <Text className="text-black font-bold">Post</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>


        </SafeAreaView>
    )
} 