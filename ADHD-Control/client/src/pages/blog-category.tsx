import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { getArticlesByCategory } from '@/lib/blog-data';

const BlogCategory = () => {
  const [match, params] = useRoute('/blog/category/:category');
  
  if (!match || !params?.category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-light/20 to-white flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-poppins font-medium text-charcoal mb-4">Category Not Found</h2>
            <Link href="/blog">
              <Button className="bg-sage hover:bg-sage-dark text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const categoryName = params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Get articles from centralized data
  const articles = getArticlesByCategory(params.category);

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
    <div className="min-h-screen bg-gradient-to-b from-sage-light/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to blog link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="ghost" className="text-sage hover:text-sage-dark hover:bg-sage-light/30">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Category header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-charcoal mb-4">
            {categoryName} Articles
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'} about {categoryName.toLowerCase()} and ADHD
          </p>
        </motion.div>

        {/* Articles */}
        {articles.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((post) => (
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
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="font-poppins font-medium text-xl text-charcoal mb-4">
                  Coming Soon
                </h3>
                <p className="text-charcoal/70 mb-6">
                  We're working on more {categoryName.toLowerCase()} content. Check back soon!
                </p>
                <Link href="/blog">
                  <Button className="bg-sage hover:bg-sage-dark text-white">
                    Browse All Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogCategory;