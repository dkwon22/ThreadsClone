// /**
//  * Types Module
//  * 
//  * This file serves as the central type definitions for the application, defining the core data structures
//  * used throughout the app. It's a crucial part of the application's type system that ensures type safety
//  * and consistency across components.
//  * 
//  * Key Types:
//  * 1. User: Represents user profile data
//  *    - Contains essential user information (id, username, name, image, bio)
//  *    - Used in profile displays, post authorship, and user interactions
//  * 
//  * 2. Post: Represents social media posts
//  *    - Contains post content, metadata, and relationship data
//  *    - Implements a threaded structure for replies and conversations
//  *    - Links to user data and parent/child relationships
//  * 
//  * Role in Application:
//  * - Provides type safety across the entire application
//  * - Ensures consistency in data structure handling
//  * - Enables TypeScript's type checking and autocompletion
//  * - Serves as a single source of truth for data structures
//  * 
//  * Usage:
//  * These types are used throughout the application in:
//  * - Main feed (index.tsx)
//  * - Profile screens
//  * - Post components
//  * - Search functionality
//  * - Notification system
//  * 
//  * The types defined here are fundamental to the application's data structure
//  * and are referenced by multiple components to ensure consistent data handling
//  * and type safety across the entire application.
//  */


// // define the types for the user and post
// export type User = {
//     id: string;
//     username: string;
//     name: string;
//     image: string;
//     bio: string;
// }
// export type Post = {
//     id: string;
//     createdAt: string;
//     content: string;
//     user_id: string;
//     user: User;
//     parent_id: string | null; // null for top level posts string if tweets are replies
//     parent: Post | null; // null for top level posts Post if tweets are replies
//     replies: Post[]; // replies to the post

// }