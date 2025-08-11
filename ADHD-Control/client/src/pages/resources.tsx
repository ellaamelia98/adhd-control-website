import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, Star, Lock, Gift, BookOpen, FileText, Video, Headphones, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

const Resources = () => {
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

  // Sample resources - you can replace with real data later
  const freeResources = [
    {
      id: 1,
      title: "Quick ADHD Reset Techniques",
      description: "Simple, science-backed micro-techniques to regain focus and calm when feeling overwhelmed or scattered.",
      type: "Interactive Tool",
      icon: CheckCircle,
      downloads: 2431,
      color: "sage",
      link: "/quick-resets"
    },
    {
      id: 2,
      title: "ADHD Morning Routine Checklist",
      description: "A simple, printable checklist to start your day with structure and clarity.",
      type: "PDF Download",
      icon: FileText,
      downloads: 1247,
      color: "blue"
    },
    {
      id: 3,
      title: "Focus Timer Techniques Guide",
      description: "Learn different timer methods including Pomodoro, time blocking, and custom intervals.",
      type: "Guide",
      icon: BookOpen,
      downloads: 856,
      color: "pink"
    }
  ];

  const premiumResources = [
    {
      id: 1,
      title: "Complete ADHD Productivity System",
      description: "A comprehensive 50-page system with templates, workflows, and step-by-step implementation guides.",
      type: "Digital Course",
      icon: Video,
      price: 29,
      color: "blue"
    },
    {
      id: 2,
      title: "ADHD-Friendly Habit Tracker Bundle",
      description: "30+ habit tracking templates designed specifically for ADHD brains with visual cues and flexibility.",
      type: "Template Bundle",
      icon: CheckCircle,
      price: 19,
      color: "sage"
    },
    {
      id: 3,
      title: "Guided ADHD Meditation Library",
      description: "20+ guided meditations for focus, emotional regulation, and sleep designed for ADHD minds.",
      type: "Audio Collection",
      icon: Headphones,
      price: 39,
      color: "pink"
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-light',
      text: 'text-blue-dark',
      hover: 'hover:bg-blue',
      border: 'border-blue-light',
      button: 'bg-blue hover:bg-blue-dark text-white'
    },
    sage: {
      bg: 'bg-sage-light',
      text: 'text-sage-dark',
      hover: 'hover:bg-sage',
      border: 'border-sage-light',
      button: 'bg-sage hover:bg-sage-dark text-white'
    },
    pink: {
      bg: 'bg-pink-light',
      text: 'text-pink-dark',
      hover: 'hover:bg-pink',
      border: 'border-pink-light',
      button: 'bg-pink hover:bg-pink-dark text-white'
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-pink-light/20 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-pink-light rounded-full">
                <Gift className="h-8 w-8 text-pink" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-charcoal mb-4">
              ADHD Resources
            </h1>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Practical tools, templates, and guides to help you take control of your ADHD and build the life you want.
            </p>
          </motion.div>

          {/* Free Resources */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Gift className="h-6 w-6 text-sage mr-2" />
              <h2 className="text-2xl font-poppins font-medium text-charcoal">
                Free Resources
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="bg-white hover:shadow-md transition-all duration-200 h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-full ${colorClasses[resource.color].bg} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${colorClasses[resource.color].text}`} />
                      </div>
                      <h3 className="font-poppins font-medium text-xl text-charcoal mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${colorClasses[resource.color].bg} ${colorClasses[resource.color].text}`}>
                          {resource.type}
                        </span>
                        <div className="flex items-center text-charcoal/60 text-xs">
                          <Download className="h-3 w-3 mr-1" />
                          {resource.downloads} downloads
                        </div>
                      </div>
                      {resource.link && (
                        <Link href={resource.link}>
                          <Button className={`w-full ${colorClasses[resource.color].button}`}>
                            Try Now
                          </Button>
                        </Link>
                      )}
                      {!resource.link && (
                        <Button className={`w-full ${colorClasses[resource.color].button}`}>
                          Download
                        </Button>
                      )}
                      <Button className={`w-full ${colorClasses[resource.color].button}`}>
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Premium Resources */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-8">
              <Star className="h-6 w-6 text-blue mr-2" />
              <h2 className="text-2xl font-poppins font-medium text-charcoal">
                Premium Resources
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {premiumResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="bg-white hover:shadow-md transition-all duration-200 h-full relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        Premium
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-full ${colorClasses[resource.color].bg} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${colorClasses[resource.color].text}`} />
                      </div>
                      <h3 className="font-poppins font-medium text-xl text-charcoal mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="mb-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${colorClasses[resource.color].bg} ${colorClasses[resource.color].text}`}>
                          {resource.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-charcoal">
                          ${resource.price}
                        </div>
                        <Button className={`${colorClasses[resource.color].button}`}>
                          Get Access
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center">
              <Card className="bg-sage-light/30 border border-sage-light max-w-md mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-medium text-lg text-charcoal mb-2">
                    More Resources Coming Soon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    We're developing comprehensive courses, templates, and tools specifically designed for ADHD minds.
                  </p>
                  <Button className="bg-sage hover:bg-sage-dark text-white">
                    Notify Me When Available
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

export default Resources;