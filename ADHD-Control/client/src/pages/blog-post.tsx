import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, BookOpen, Share2 } from 'lucide-react';
import { getPostBySlug } from '@/lib/blog-data';

const BlogPost = () => {
  const [match, params] = useRoute('/blog/:slug');
  
  if (!match || !params?.slug) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-light/20 to-white flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-poppins font-medium text-charcoal mb-4">Article Not Found</h2>
            <p className="text-charcoal/70 mb-6">The article you're looking for doesn't exist or has been moved.</p>
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

  // Get the post from centralized data
  const post = getPostBySlug(params.slug);
  
  // Sample article content - in a real app, this would come from a CMS or database
  const articleContent: { [key: string]: any } = {
    'adhd-time-blindness-strategies': {
      title: "Why Your ADHD Brain Struggles with Time (And What Actually Helps)",
      date: "August 10, 2025",
      readTime: "8 min read",
      category: "Neuroscience",
      author: "Dr. Sarah Martinez",
      content: `
        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">Time blindness is one of the most challenging aspects of ADHD, yet it's rarely discussed in mainstream conversations about the condition. If you've ever lost hours to a simple task, missed appointments despite setting reminders, or felt like time moves differently for you than everyone else, you're not alone.</p>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">The Neuroscience Behind Time Blindness</h2>
        <p className="text-charcoal/80 mb-6 leading-relaxed">ADHD brains process time differently due to differences in the prefrontal cortex and dopamine regulation. Research shows that people with ADHD consistently underestimate time intervals and struggle with time-based prospective memory.</p>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">7 Strategies That Actually Work</h2>
        <div className="space-y-6">
          <div className="bg-sage-light/20 rounded-lg p-6">
            <h3 className="font-poppins font-medium text-lg text-charcoal mb-3">1. Time Boxing with Visual Cues</h3>
            <p className="text-charcoal/80 leading-relaxed">Instead of traditional scheduling, use colored blocks to represent different types of activities. Visual learners with ADHD respond better to color-coded time management.</p>
          </div>
          
          <div className="bg-blue-light/20 rounded-lg p-6">
            <h3 className="font-poppins font-medium text-lg text-charcoal mb-3">2. The 15-Minute Rule</h3>
            <p className="text-charcoal/80 leading-relaxed">Break everything into 15-minute chunks. It's short enough to maintain focus and long enough to accomplish meaningful work.</p>
          </div>
          
          <div className="bg-pink-light/20 rounded-lg p-6">
            <h3 className="font-poppins font-medium text-lg text-charcoal mb-3">3. External Time Awareness</h3>
            <p className="text-charcoal/80 leading-relaxed">Use analog clocks, time timers, or apps that provide continuous time feedback rather than relying on internal time sense.</p>
          </div>
        </div>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-2 text-charcoal/80 mb-6">
          <li>Time blindness is a neurological reality, not a character flaw</li>
          <li>External supports work better than willpower alone</li>
          <li>Small, consistent changes compound over time</li>
          <li>Find what works for YOUR brain, not what works for neurotypical brains</li>
        </ul>
      `
    },
    'adhd-productivity-paradox': {
      title: "The ADHD Productivity Paradox: Why 'Just Focus' Doesn't Work",
      date: "August 8, 2025",
      readTime: "6 min read",
      category: "Productivity",
      author: "Maria Chen",
      content: `
        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">Traditional productivity advice assumes a neurotypical brain with consistent executive function. For ADHD brains, this advice isn't just ineffective—it's counterproductive and can lead to increased shame and frustration.</p>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">Why Traditional Methods Fail</h2>
        <p className="text-charcoal/80 mb-6 leading-relaxed">ADHD brains have variable executive function, dopamine-seeking behavior, and different attention patterns. What works depends on your current state, interest level, and environment.</p>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">ADHD-Friendly Alternatives</h2>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-sage pl-4">
            <h3 className="font-medium text-charcoal mb-2">Instead of rigid schedules → Use flexible time blocks</h3>
          </div>
          <div className="border-l-4 border-blue pl-4">
            <h3 className="font-medium text-charcoal mb-2">Instead of long focus sessions → Use micro-sprints</h3>
          </div>
          <div className="border-l-4 border-pink pl-4">
            <h3 className="font-medium text-charcoal mb-2">Instead of fighting distractions → Work with your brain's patterns</h3>
          </div>
        </div>
      `
    },
    'rejection-sensitive-dysphoria-adhd': {
      title: "Rejection Sensitive Dysphoria: The ADHD Symptom No One Talks About",
      date: "August 6, 2025",
      readTime: "10 min read",
      category: "Mental Health",
      author: "Dr. James Wilson",
      content: `
        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">Rejection Sensitive Dysphoria (RSD) affects up to 99% of people with ADHD, yet it's rarely discussed in diagnostic criteria or treatment plans. This intense emotional pain from perceived rejection or criticism can be debilitating.</p>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">What RSD Feels Like</h2>
        <div className="bg-pink-light/20 rounded-lg p-6 mb-6">
          <ul className="space-y-2 text-charcoal/80">
            <li>• Physical pain from emotional wounds</li>
            <li>• Overwhelming shame from minor criticism</li>
            <li>• Anticipatory anxiety about potential rejection</li>
            <li>• People-pleasing to avoid criticism</li>
            <li>• Isolation to prevent emotional pain</li>
          </ul>
        </div>

        <h2 className="text-2xl font-poppins font-medium text-charcoal mb-4 mt-8">Coping Strategies</h2>
        <p className="text-charcoal/80 mb-6 leading-relaxed">Understanding RSD is the first step. From there, building emotional regulation skills, creating supportive environments, and sometimes medication can help manage this challenging aspect of ADHD.</p>
      `
    }
  };

  const content = articleContent[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-light/20 to-white flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-poppins font-medium text-charcoal mb-4">Article Not Found</h2>
            <p className="text-charcoal/70 mb-6">The article you're looking for doesn't exist or has been moved.</p>
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

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-light/20 to-white flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-poppins font-medium text-charcoal mb-4">Article Coming Soon</h2>
            <p className="text-charcoal/70 mb-6">This article is currently being written. Check back soon!</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-light/20 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Article header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center text-sm text-charcoal/60 mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.readTime}</span>
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-charcoal mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <p className="text-charcoal/70">By {post.author}</p>
            <Button variant="outline" size="sm" className="text-sage border-sage hover:bg-sage hover:text-white">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white">
            <CardContent className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: content?.content || '<p>Content coming soon...</p>' }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Related articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-sage-light/20 to-blue-light/20 border-0">
            <CardContent className="p-8">
              <h3 className="font-poppins font-medium text-xl text-charcoal mb-4">
                Want More ADHD Insights?
              </h3>
              <p className="text-charcoal/70 mb-6">
                Explore our complete library of evidence-based ADHD strategies and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button className="bg-sage hover:bg-sage-dark text-white">
                    View All Articles
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;