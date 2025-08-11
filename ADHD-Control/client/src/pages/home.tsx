import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Pause, Zap, BatteryLow, Shuffle, Sparkles, HeartPulse, BookOpen, Gift, Award, Brain } from 'lucide-react';

const Home = () => {
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
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sage-light/20 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="mb-6 flex justify-center"
            variants={itemVariants}
          >
            <div className="p-3 bg-pink-light rounded-full inline-block">
              <Sparkles className="h-8 w-8 text-pink" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-poppins font-semibold text-charcoal mb-6"
            variants={itemVariants}
          >
            Take Control of Your ADHD
          </motion.h1>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-charcoal mb-8 leading-relaxed">
              Practical tools, resources, and strategies to help you thrive with ADHD. From quick resets to comprehensive guides, everything you need to build focus and manage overwhelm.
            </p>
          </motion.div>
          
          {/* Platform Features */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-poppins font-medium text-charcoal text-center mb-8">
              Everything You Need to Thrive with ADHD
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Blog */}
              <Link href="/blog">
                <Card className="bg-white hover:shadow-lg transition-all duration-200 h-full cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="bg-blue-light rounded-full p-3 w-fit mx-auto mb-4 group-hover:bg-blue transition-colors">
                      <BookOpen className="h-8 w-8 text-blue-dark group-hover:text-white" />
                    </div>
                    <h3 className="font-poppins font-medium text-xl text-charcoal mb-3 text-center">
                      Blog & Articles
                    </h3>
                    <p className="text-charcoal/70 text-center text-sm leading-relaxed">
                      Evidence-based strategies, practical tips, and real-world advice for managing ADHD in daily life.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Resources */}
              <Link href="/resources">
                <Card className="bg-white hover:shadow-lg transition-all duration-200 h-full cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="bg-sage-light rounded-full p-3 w-fit mx-auto mb-4 group-hover:bg-sage transition-colors">
                      <Gift className="h-8 w-8 text-sage-dark group-hover:text-white" />
                    </div>
                    <h3 className="font-poppins font-medium text-xl text-charcoal mb-3 text-center">
                      Resources & Tools
                    </h3>
                    <p className="text-charcoal/70 text-center text-sm leading-relaxed">
                      Downloadable templates, comprehensive guides, and premium courses designed specifically for ADHD brains.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Product Reviews */}
              <Link href="/product-reviews">
                <Card className="bg-white hover:shadow-lg transition-all duration-200 h-full cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="bg-pink-light rounded-full p-3 w-fit mx-auto mb-4 group-hover:bg-pink transition-colors">
                      <Award className="h-8 w-8 text-pink-dark group-hover:text-white" />
                    </div>
                    <h3 className="font-poppins font-medium text-xl text-charcoal mb-3 text-center">
                      Product Reviews
                    </h3>
                    <p className="text-charcoal/70 text-center text-sm leading-relaxed">
                      Honest reviews of apps, tools, and products that can actually help with ADHD focus and organization.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              {/* About */}
              <Link href="/about">
                <Card className="bg-white hover:shadow-lg transition-all duration-200 h-full cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="bg-blue-light rounded-full p-3 w-fit mx-auto mb-4 group-hover:bg-blue transition-colors">
                      <HeartPulse className="h-8 w-8 text-blue-dark group-hover:text-white" />
                    </div>
                    <h3 className="font-poppins font-medium text-xl text-charcoal mb-3 text-center">
                      About ADHD Control
                    </h3>
                    <p className="text-charcoal/70 text-center text-sm leading-relaxed">
                      Learn about our mission to provide practical, evidence-based support for the ADHD community.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>
          
          {/* Quick Start CTA */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-sage-light/20 to-blue-light/20 border border-sage-light/30 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="font-poppins font-medium text-2xl text-charcoal mb-4">
                  Start Your ADHD Control Journey
                </h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Discover evidence-based strategies, practical tools, and helpful resources designed specifically for ADHD minds.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/resources">
                    <Button className="bg-sage hover:bg-sage-dark text-white px-6 py-3 w-full sm:w-auto">
                      Explore Resources
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline" className="border-blue text-blue-dark bg-blue-light hover:bg-blue hover:text-white px-6 py-3 w-full sm:w-auto">
                      Read Articles
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
