import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const About = () => {
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
    <section className="py-16 md:py-24">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-poppins font-semibold text-charcoal mb-6">About ADHD Control</h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-10">
            <CardContent className="p-0">
              <div className="mb-8">
                <h3 className="text-xl font-poppins font-medium text-sage-dark mb-4">Made by ADHD brains, for ADHD brains</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  ADHD Control is a comprehensive platform created by people who understand the unique experience of living with ADHD. 
                  Our tools and resources aren't just theory – they're the actual techniques we use to navigate our own challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to provide practical, evidence-based support that works with your brain instead of fighting against it.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-poppins font-medium text-sage-dark mb-4">What We Offer</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  ADHD Control provides a comprehensive suite of resources to support your ADHD journey:
                </p>
                <ul className="list-disc pl-6 text-lg space-y-2">
                  <li><strong>Tiny Resets:</strong> Quick, science-backed techniques for immediate relief</li>
                  <li><strong>Emergency Kit:</strong> Intensive interventions for crisis moments</li>
                  <li><strong>Blog & Articles:</strong> Evidence-based strategies and practical advice</li>
                  <li><strong>Resources & Tools:</strong> Both free and premium templates, guides, and courses</li>
                  <li><strong>Product Reviews:</strong> Honest reviews of ADHD-helpful apps and tools</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-poppins font-medium text-sage-dark mb-4">The science behind our approach</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  Our tools are based on research around how the ADHD brain responds to stimuli, transitions, and overwhelm. 
                  We focus on techniques that:
                </p>
                <ul className="list-disc pl-6 text-lg space-y-2">
                  <li>Help regulate the nervous system</li>
                  <li>Create quick dopamine boosts</li>
                  <li>Interrupt negative thought patterns</li>
                  <li>Support executive function</li>
                  <li>Work with, not against, ADHD brain wiring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-poppins font-medium text-sage-dark mb-4">Remember...</h3>
                <p className="text-lg leading-relaxed italic text-charcoal">
                  Your brain isn't broken - it's just wired differently. These resets help you work with your unique wiring instead of against it.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-xl font-poppins font-medium text-charcoal mb-4">Have a reset that works for you?</h3>
          <p className="text-lg mb-6">
            We'd love to hear about it and potentially add it to our collection!
          </p>
          <Button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage hover:bg-sage-dark transition duration-150 ease-in-out">
            Share Your Reset
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
