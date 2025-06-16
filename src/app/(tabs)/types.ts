// define the types for the user and post
export type User = {
    id: string;
    username: string;
    name: string;
    image: string;
    bio: string;
}
export type Post = {
    id: string;
    createdAt: string;
    content: string;
    user_id: string;
    user: User;
    parent_id: string | null; // null for top level posts string if tweets are replies
    parent: Post | null; // null for top level posts Post if tweets are replies
    replies: Post[]; // replies to the post
    
}