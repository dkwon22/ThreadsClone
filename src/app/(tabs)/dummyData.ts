import { User, Post } from './types';

export const dummyUsers: User[] = [
  {
    id: "user1",
    username: "alex_dev",
    name: "Alex Johnson",
    image: "https://picsum.photos/200/200?random=1",
    bio: "Full-stack developer passionate about React and TypeScript"
  },
  {
    id: "user2",
    username: "sarah_codes",
    name: "Sarah Chen",
    image: "https://picsum.photos/200/200?random=2",
    bio: "Frontend engineer who loves clean code and great UX"
  },
  {
    id: "user3",
    username: "mike_builds",
    name: "Mike Rodriguez",
    image: "https://picsum.photos/200/200?random=3",
    bio: "Backend developer specializing in Node.js and databases"
  },
  {
    id: "user4",
    username: "emma_designs",
    name: "Emma Thompson",
    image: "https://picsum.photos/200/200?random=4",
    bio: "UI/UX designer turned developer. Design systems enthusiast"
  },
  {
    id: "user5",
    username: "david_mobile",
    name: "David Kim",
    image: "https://picsum.photos/200/200?random=5",
    bio: "Mobile app developer working with React Native and Flutter"
  }
];

// Create posts with proper threading structure
export const dummyPosts: Post[] = [];

// Top-level posts
const post1: Post = {
  id: "post1",
  createdAt: "2024-01-15T10:30:00Z",
  content: "Just finished building my first TypeScript project! The type safety really makes a difference. 🚀",
  user_id: "user1",
  user: dummyUsers[0],
  parent_id: null,
  parent: null,
  replies: []
};

const post2: Post = {
  id: "post2",
  createdAt: "2024-01-15T11:45:00Z",
  content: "Working on a new React Native app. The component architecture is coming together nicely. Any tips for state management?",
  user_id: "user5",
  user: dummyUsers[4],
  parent_id: null,
  parent: null,
  replies: []
};

const post3: Post = {
  id: "post3",
  createdAt: "2024-01-15T14:20:00Z",
  content: "Design systems are game changers! Just implemented a consistent color palette across our entire app. ✨",
  user_id: "user4",
  user: dummyUsers[3],
  parent_id: null,
  parent: null,
  replies: []
};

const post4: Post = {
  id: "post4",
  createdAt: "2024-01-15T16:10:00Z",
  content: "Database optimization tip: Always index your frequently queried columns. Saw a 10x performance improvement!",
  user_id: "user3",
  user: dummyUsers[2],
  parent_id: null,
  parent: null,
  replies: []
};

const post5: Post = {
  id: "post5",
  createdAt: "2024-01-15T18:30:00Z",
  content: "Clean code isn't just about functionality - it's about readability and maintainability. Future you will thank present you! 📚",
  user_id: "user2",
  user: dummyUsers[1],
  parent_id: null,
  parent: null,
  replies: []
};

// Reply posts
const reply1: Post = {
  id: "post6",
  createdAt: "2024-01-15T10:45:00Z",
  content: "Congrats! TypeScript can be intimidating at first but it's so worth it. What was the biggest challenge you faced?",
  user_id: "user2",
  user: dummyUsers[1],
  parent_id: "post1",
  parent: post1,
  replies: []
};

const reply2: Post = {
  id: "post7",
  createdAt: "2024-01-15T11:00:00Z",
  content: "The learning curve was steep, but once I understood interfaces and generics, everything clicked! 💡",
  user_id: "user1",
  user: dummyUsers[0],
  parent_id: "post1",
  parent: post1,
  replies: []
};

const reply3: Post = {
  id: "post8",
  createdAt: "2024-01-15T12:00:00Z",
  content: "For React Native state management, I'd recommend starting with Context API for simple cases, then moving to Redux Toolkit for complex state.",
  user_id: "user1",
  user: dummyUsers[0],
  parent_id: "post2",
  parent: post2,
  replies: []
};

const reply4: Post = {
  id: "post9",
  createdAt: "2024-01-15T12:15:00Z",
  content: "Also consider Zustand! It's lightweight and has great TypeScript support. Perfect for React Native.",
  user_id: "user2",
  user: dummyUsers[1],
  parent_id: "post2",
  parent: post2,
  replies: []
};

const reply5: Post = {
  id: "post10",
  createdAt: "2024-01-15T12:30:00Z",
  content: "Thanks for the suggestions! I'll check out Zustand - haven't used it before but heard good things.",
  user_id: "user5",
  user: dummyUsers[4],
  parent_id: "post2",
  parent: post2,
  replies: []
};

const reply6: Post = {
  id: "post11",
  createdAt: "2024-01-15T14:35:00Z",
  content: "Love this! Consistency is key. Do you use any tools to enforce the design system across teams?",
  user_id: "user1",
  user: dummyUsers[0],
  parent_id: "post3",
  parent: post3,
  replies: []
};

const reply7: Post = {
  id: "post12",
  createdAt: "2024-01-15T14:50:00Z",
  content: "We use Storybook for documentation and Figma tokens for design consistency. Works great!",
  user_id: "user4",
  user: dummyUsers[3],
  parent_id: "post3",
  parent: post3,
  replies: []
};

const reply8: Post = {
  id: "post13",
  createdAt: "2024-01-15T16:25:00Z",
  content: "So true! Also don't forget about composite indexes for multi-column queries. They can be even more effective.",
  user_id: "user5",
  user: dummyUsers[4],
  parent_id: "post4",
  parent: post4,
  replies: []
};

const reply9: Post = {
  id: "post14",
  createdAt: "2024-01-15T18:45:00Z",
  content: "Absolutely! I always say: write code like the person maintaining it is a violent psychopath who knows where you live 😅",
  user_id: "user3",
  user: dummyUsers[2],
  parent_id: "post5",
  parent: post5,
  replies: []
};

const reply10: Post = {
  id: "post15",
  createdAt: "2024-01-15T19:00:00Z",
  content: "Haha! That's actually a great mindset. Code reviews become much more productive when everyone thinks this way.",
  user_id: "user4",
  user: dummyUsers[3],
  parent_id: "post5",
  parent: post5,
  replies: []
};

// Add replies to their parent posts
post1.replies = [reply1, reply2];
post2.replies = [reply3, reply4, reply5];
post3.replies = [reply6, reply7];
post4.replies = [reply8];
post5.replies = [reply9, reply10];

// Combine all posts
dummyPosts.push(
  post1, post2, post3, post4, post5,
  reply1, reply2, reply3, reply4, reply5,
  reply6, reply7, reply8, reply9, reply10
);

export { dummyPosts as posts }; 