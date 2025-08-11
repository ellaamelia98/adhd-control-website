// Centralized blog data - add new articles here and they'll appear throughout the site
// 
// TO ADD A NEW ARTICLE:
// 1. Add it to the blogPosts array below
// 2. Set featured: true to show it on the main blog page
// 3. The category counts will automatically update
// 4. Create the article content in blog-post.tsx articleContent object
//
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: "Neuroscience" | "Productivity" | "Mental Health";
  date: string;
  readTime: string;
  author: string;
  slug: string;
  color: "blue" | "sage" | "pink";
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Your ADHD Brain Struggles with Time (And What Actually Helps)",
    excerpt: "Time blindness is real. Here's the neuroscience behind why ADHDers experience time differently and 7 practical strategies that actually work.",
    category: "Neuroscience",
    date: "August 10, 2025",
    readTime: "8 min read",
    author: "Dr. Sarah Martinez",
    slug: "adhd-time-blindness-strategies",
    color: "blue",
    featured: true
  },
  {
    id: 2,
    title: "The ADHD Productivity Paradox: Why 'Just Focus' Doesn't Work",
    excerpt: "Traditional productivity advice fails ADHD brains. Discover why your executive function needs different strategies and what research shows actually helps.",
    category: "Productivity",
    date: "August 8, 2025",
    readTime: "6 min read",
    author: "Maria Chen",
    slug: "adhd-productivity-paradox",
    color: "sage",
    featured: true
  },
  {
    id: 3,
    title: "Rejection Sensitive Dysphoria: The ADHD Symptom No One Talks About",
    excerpt: "Up to 99% of ADHDers experience intense emotional pain from perceived criticism. Here's how to recognize RSD and develop coping strategies.",
    category: "Mental Health",
    date: "August 6, 2025",
    readTime: "10 min read",
    author: "Dr. James Wilson",
    slug: "rejection-sensitive-dysphoria-adhd",
    color: "pink",
    featured: true
  },
  {
    id: 4,
    title: "ADHD Masking: The Exhausting Art of Appearing 'Normal'",
    excerpt: "Many ADHDers spend enormous energy hiding their struggles. Learn to recognize masking, understand its costs, and find sustainable alternatives.",
    category: "Mental Health",
    date: "August 4, 2025",
    readTime: "7 min read",
    author: "Alex Rivera",
    slug: "adhd-masking-exhaustion",
    color: "pink"
  },
  {
    id: 5,
    title: "The ADHD Brain on Dopamine: Why Motivation Feels Impossible",
    excerpt: "Understanding your brain's reward system explains why starting tasks feels impossible and finishing them feels even harder. Here's what helps.",
    category: "Neuroscience",
    date: "August 2, 2025",
    readTime: "9 min read",
    author: "Dr. Sarah Martinez",
    slug: "adhd-dopamine-motivation",
    color: "blue"
  },
  {
    id: 6,
    title: "ADHD and Sleep: Breaking the Vicious Cycle",
    excerpt: "ADHD brains are wired to stay awake when they should sleep and feel tired when they should be alert. Science-backed strategies to fix your sleep.",
    category: "Mental Health",
    date: "July 30, 2025",
    readTime: "8 min read",
    author: "Dr. Lisa Park",
    slug: "adhd-sleep-cycle-solutions",
    color: "pink"
  }
];

// Helper functions to get articles by category
export const getArticlesByCategory = (category: string) => {
  return blogPosts.filter(post => 
    post.category.toLowerCase().replace(/ /g, '-') === category
  );
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getCategoryCounts = () => {
  const neuroscience = blogPosts.filter(post => post.category === "Neuroscience").length;
  const productivity = blogPosts.filter(post => post.category === "Productivity").length;
  const mentalHealth = blogPosts.filter(post => post.category === "Mental Health").length;
  
  return {
    neuroscience,
    productivity,
    mentalHealth
  };
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};