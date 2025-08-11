import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ShoppingCart, Award, TrendingUp, Filter } from 'lucide-react';

const ProductReviews = () => {
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

  // Sample product reviews - you can replace with real data later
  const featuredReviews = [
    {
      id: 1,
      title: "Forest App - Focus & Productivity Timer",
      category: "Apps",
      rating: 4.5,
      price: "Free / $3.99 Pro",
      pros: ["Gamified focus sessions", "Beautiful forest visualization", "Great for building habits"],
      cons: ["Limited customization in free version", "Can be distracting for some"],
      summary: "Perfect for ADHD brains that need visual motivation and gamification to stay focused.",
      affiliate: true,
      color: "sage"
    },
    {
      id: 2,
      title: "Noise-Cancelling Headphones - Sony WH-1000XM4",
      category: "Hardware",
      rating: 5.0,
      price: "$249.99",
      pros: ["Excellent noise cancellation", "All-day comfort", "Great for sensory overwhelm"],
      cons: ["Expensive", "Can feel isolating"],
      summary: "A game-changer for ADHD focus, especially in noisy environments or open offices.",
      affiliate: true,
      color: "blue"
    },
    {
      id: 3,
      title: "Fidget Cube - Original Antsy Labs",
      category: "Tools",
      rating: 4.0,
      price: "$19.99",
      pros: ["Discreet fidgeting", "Multiple tactile options", "Pocket-friendly"],
      cons: ["Can break with heavy use", "Not suitable for all fidget needs"],
      summary: "Great for discrete stimming during meetings, though durability could be better.",
      affiliate: true,
      color: "pink"
    }
  ];

  const categories = [
    { name: "Focus Apps", count: 12, color: "blue" },
    { name: "Organization Tools", count: 8, color: "sage" },
    { name: "Sensory Aids", count: 6, color: "pink" },
    { name: "Productivity Hardware", count: 10, color: "blue" }
  ];

  const colorClasses: Record<string, {
    bg: string;
    text: string;
    hover: string;
    border: string;
    button: string;
  }> = {
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-light/20 to-white min-h-screen">
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
                <Award className="h-8 w-8 text-blue" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-charcoal mb-4">
              ADHD Product Reviews
            </h1>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Honest, ADHD-focused reviews of apps, tools, and products that actually help with focus, organization, and daily life.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Filter className="h-5 w-5 text-charcoal mr-2" />
              <h2 className="text-xl font-poppins font-medium text-charcoal">
                Browse by Category
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className={`${colorClasses[category.color].bg} border ${colorClasses[category.color].border} hover:shadow-md transition-all duration-200 cursor-pointer`}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium text-sm text-charcoal mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-charcoal/70">
                      {category.count} reviews
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Featured Reviews */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="h-6 w-6 text-sage mr-2" />
              <h2 className="text-2xl font-poppins font-medium text-charcoal">
                Featured Reviews
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {featuredReviews.map((review) => (
                <Card key={review.id} className="bg-white hover:shadow-md transition-all duration-200 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${colorClasses[review.color].bg} ${colorClasses[review.color].text}`}>
                        {review.category}
                      </span>
                      {review.affiliate && (
                        <span className="text-xs text-charcoal/60 bg-gray-100 px-2 py-1 rounded-full">
                          Affiliate
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-poppins font-medium text-lg text-charcoal mb-2">
                      {review.title}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm font-medium text-charcoal">
                        {review.rating}/5
                      </span>
                    </div>
                    
                    <div className="text-sm font-medium text-charcoal mb-3">
                      {review.price}
                    </div>
                    
                    <p className="text-sm text-charcoal/70 mb-4 leading-relaxed">
                      {review.summary}
                    </p>
                    
                    <div className="mb-4">
                      <div className="mb-2">
                        <h4 className="text-xs font-medium text-charcoal mb-1">PROS:</h4>
                        <ul className="text-xs text-charcoal/70 space-y-1">
                          {review.pros.slice(0, 2).map((pro, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-charcoal mb-1">CONS:</h4>
                        <ul className="text-xs text-charcoal/70 space-y-1">
                          {review.cons.slice(0, 2).map((con, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className={`flex-1 ${colorClasses[review.color].button} text-sm`}>
                        Read Full Review
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center">
              <Card className="bg-sage-light/30 border border-sage-light max-w-md mx-auto">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-medium text-lg text-charcoal mb-2">
                    More Reviews Coming Soon
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    We're testing and reviewing products specifically for ADHD needs. Have a suggestion?
                  </p>
                  <Button className="bg-sage hover:bg-sage-dark text-white">
                    Suggest a Product
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

export default ProductReviews;