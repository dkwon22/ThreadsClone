import { Post } from "@/types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PostListItem({ post }: { post: Post }) {
    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        
        if (diffInHours < 1) {
            const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
            return `${diffInMinutes}m`;
        } else if (diffInHours < 24) {
            return `${diffInHours}h`;
        } else {
            const diffInDays = Math.floor(diffInHours / 24);
            return `${diffInDays}d`;
        }
    };

    return (
        <View className="flex-row p-4 border-b border-gray-800/70 bg-black">
            {/* User Avatar */}
            <Image
                source={{ uri: post.user.image }}
                className="w-12 h-12 rounded-full mr-3"
            />
            
            {/* Main Content */}
            <View className="flex-1">
                {/* User Info and Timestamp */}
                <View className="flex-row items-center mb-1">
                    <Text className="text-white font-semibold text-base mr-2">
                        {post.user.username}
                    </Text>
                    
                    <Text className="text-gray-500 text-sm">
                        · {formatTimeAgo(post.createdAt)}
                    </Text>
                </View>

                {/* Post Content */}
                <Text className="text-white text-base leading-5 mb-3">
                    {post.content}
                </Text>

                {/* Action Buttons */}
                <View className="flex-row gap-4 mt-2">

                    
                    {/* Like */}
                    <TouchableOpacity className="flex-row items-center">
                        <Ionicons name="heart-outline" size={18} color="#d1d5db" />
                        <Text className="text-gray-300 text-sm ml-2">0</Text>
                    </TouchableOpacity>


                    {/* Reply */} 
                    <TouchableOpacity className="flex-row items-center">
                        <Ionicons name="chatbubble-outline" size={18} color="#d1d5db" />
                        <Text className="text-gray-300 text-sm ml-2">
                            {post.replies?.length || 0}
                        </Text>
                    </TouchableOpacity>

                    {/* Repost */}
                    <TouchableOpacity className="flex-row items-center">
                        <Ionicons name="repeat-outline" size={18} color="#d1d5db" />
                        <Text className="text-gray-300 text-sm ml-2">0</Text>
                    </TouchableOpacity>



                    {/* Share */}
                    <TouchableOpacity>
                        <Ionicons name="paper-plane-outline" size={18} color="#d1d5db" />
                    </TouchableOpacity>
                </View>

                {/* Reply Indicator (if this is a reply) */}
                {post.parent && (
                    <View className="mt-2 flex-row items-center">
                        <Ionicons name="return-down-forward-outline" size={14} color="#d1d5db" />
                        <Text className="text-gray-500 text-sm ml-1">
                            Replying to @{post.parent.user.username}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}