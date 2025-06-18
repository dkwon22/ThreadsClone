import { FlatList, ActivityIndicator } from 'react-native';
import PostListItem from '@/components/PostListItem';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { Post } from '@/types';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Text } from 'react-native';
/**
 * HomeScreen Component
 * 
 * This file serves as the main feed screen of the application, displaying a scrollable list of posts
 * in chronological order. It's a crucial component that users interact with most frequently.
 * 
 * Key Features:
 * - Implements a FlatList for efficient rendering of posts
 * - Uses dummy data for development (to be replaced with API calls)
 * - Renders individual posts using the PostListItem component
 * 
 * Role in Application:
 * - Acts as the primary content feed for users
 * - Serves as the main entry point for post interactions
 * - Integrates with the tab navigation system
 * - Provides the foundation for social media functionality
 * 
 * Technical Implementation:
 * - Uses React Native's FlatList for performance optimization
 * - Imports and utilizes the PostListItem component for consistent post rendering
 * - Currently uses dummy data from dummyData.ts
 * 
 * Future Considerations:
 * - Will need to implement real API integration
 * - Should add pull-to-refresh functionality
 * - Could benefit from infinite scroll implementation
 * - May need to add loading states and error handling
 * 
 * This component is fundamental to the app's user experience, serving as the main
 * content hub where users can view and interact with posts from other users.
 */


const fetchPosts = async () => {
  const { data} = await supabase
  .from('posts')
  .select('*, user:profiles(*)')
  .order('created_at', { ascending: false })
  .throwOnError();

  return data
};

export default function HomeScreen() {


  const {data, isLoading, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    throwOnError: true, // Automatically throws errors to the error boundary when a query fails
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

//console.log(JSON.stringify(posts,null,2));

// text-2xl is the size of the text, font-bold is the font weight, text-red-500 is the color of the text
  return (
    <FlatList 
    data={data}
    renderItem={({item}) => <PostListItem post={item} />}

    />
  );
}
