import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Brain } from 'lucide-react';
import { Link } from 'wouter';
import { getFeaturedPosts, getCategoryCounts } from '@/lib/blog-data';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Get posts and counts from centralized data
  const featuredPosts = getFeaturedPosts();
  const articleCounts = getCategoryCounts();

  const categories = [
    { name: "Neuroscience", count: articleCounts.neuroscience, icon: Brain, color: "blue" },
    { name: "Productivity", count: articleCounts.productivity, icon: TrendingUp, color: "sage" },
    { name: "Mental Health", count: articleCounts.mentalHealth, icon: BookOpen, color: "pink" }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-light',
      text: 'text-blue-dark',
      hover: 'hover:bg-blue',
      border: 'border-blue-light'
    },
    sage: {
      bg: 'bg-sage-light',
      text: 'text-sage-dark',
      hover: 'hover:bg-sage',
      border: 'border-sage-light'
    },
    pink: {
      bg: 'bg-pink-light',
      text: 'text-pink-dark',
      hover: 'hover:bg-pink',
      border: 'border-pink-light'
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sage-light/20 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-light rounded-full">
                <BookOpen className="h-8 w-8 text-blue" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-charcoal mb-4">
              ADHD Control Blog
            </h1>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Evidence-based strategies, practical tips, and real-world advice for taking control of your ADHD journey.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-poppins font-medium text-charcoal mb-6 text-center">
              Explore by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link key={index} href={`/blog/category/${category.name.toLowerCase().replace(/ /g, '-')}`}>
                    <Card className={`${colorClasses[category.color].bg} border ${colorClasses[category.color].border} hover:shadow-md transition-all duration-200 cursor-pointer group`}>
                      <CardContent className="p-6 text-center">
                        <div className="bg-white rounded-full p-3 w-fit mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <Icon className={`h-6 w-6 ${colorClasses[category.color].text}`} />
                        </div>
                        <h3 className="font-poppins font-medium text-lg text-charcoal mb-1 group-hover:text-blue transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-charcoal/70">
                          {category.count} articles
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Posts */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-poppins font-medium text-charcoal mb-6">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="bg-white hover:shadow-md transition-all duration-200 h-full cursor-pointer group">
                    <CardContent className="p-0">
                      <div className={`h-48 ${colorClasses[post.color].bg} rounded-t-lg flex items-center justify-center`}>
                        <div className="text-6xl opacity-20">📖</div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-charcoal/60 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${colorClasses[post.color].bg} ${colorClasses[post.color].text} mb-3`}>
                          {post.category}
                        </span>
                        <h3 className="font-poppins font-medium text-xl text-charcoal mb-2 group-hover:text-blue transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-blue group-hover:text-blue-dark transition-colors">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center">
              <Card className="bg-sage-light/30 border border-sage-light max-w-md mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-medium text-lg text-charcoal mb-2">
                    More Content Coming Soon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    We're actively creating valuable content for the ADHD community. Subscribe to be notified when new articles are published.
                  </p>
                  <Button className="bg-sage hover:bg-sage-dark text-white">
                    Subscribe for Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;