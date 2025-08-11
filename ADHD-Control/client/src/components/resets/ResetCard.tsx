import { useState } from 'react';
import { Reset } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, ChevronUp, Droplets, Trees, Wind, UserCheck, Sunrise, Snowflake, ZoomIn, Music, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResetCardProps {
  reset: Reset;
}

const ResetCard = ({ reset }: ResetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const colorClasses = {
    blue: {
      bg: 'bg-blue-light',
      text: 'text-blue-dark',
      hover: 'hover:text-blue-dark',
      button: 'text-blue hover:text-blue-dark',
      border: 'border-blue-light',
      instructions: 'bg-blue-light/20',
    },
    sage: {
      bg: 'bg-sage-light',
      text: 'text-sage-dark',
      hover: 'hover:text-sage-dark',
      button: 'text-sage hover:text-sage-dark',
      border: 'border-sage-light',
      instructions: 'bg-sage-light/20',
    },
    pink: {
      bg: 'bg-pink-light',
      text: 'text-pink-dark',
      hover: 'hover:text-pink-dark',
      button: 'text-pink hover:text-pink-dark',
      border: 'border-pink-light',
      instructions: 'bg-pink-light/20',
    },
  };

  // Map icon strings to Lucide React components
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'water': return <Droplets className="h-5 w-5" />;
      case 'tree': return <Trees className="h-5 w-5" />;
      case 'hand-paper': return <UserCheck className="h-5 w-5" />;
      case 'wind': return <Wind className="h-5 w-5" />;
      case 'walking': return <UserCheck className="h-5 w-5" />;
      case 'cloud-sun': return <Sunrise className="h-5 w-5" />;
      case 'snowflake': return <Snowflake className="h-5 w-5" />;
      case 'lungs': return <Wind className="h-5 w-5" />; // Using Wind as fallback for lungs
      case 'compress-arrows-alt': return <ZoomIn className="h-5 w-5" />;
      case 'music': return <Music className="h-5 w-5" />;
      case 'mountain': return <Mountain className="h-5 w-5" />;
      default: return <ChevronRight className="h-5 w-5" />;
    }
  };
  
  const handleTryIt = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <motion.div
      whileHover={isOpen ? {} : { y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={`reset-card bg-white ${isHovered ? 'shadow-md' : 'shadow'} hover:shadow-md transition-all duration-200 h-full`}
      >
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full ${colorClasses[reset.color].bg} flex items-center justify-center ${colorClasses[reset.color].text}`}>
              {getIcon(reset.icon)}
            </div>
            <h3 className="ml-3 text-xl font-poppins font-medium text-charcoal">{reset.title}</h3>
          </div>
          <p className="text-base text-charcoal mb-3">
            {reset.description}
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleTryIt} 
            className={`${colorClasses[reset.color].button} p-0 transition duration-150 ease-in-out font-medium text-sm flex items-center hover:bg-transparent`}
          >
            {isOpen ? (
              <>Hide Instructions <ChevronUp className="ml-1 h-3 w-3" /></>
            ) : (
              <>Try it <ChevronDown className="ml-1 h-3 w-3" /></>
            )}
          </Button>
          
          <AnimatePresence>
            {isOpen && reset.instructions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 rounded-md p-4 ${colorClasses[reset.color].instructions} border ${colorClasses[reset.color].border} overflow-hidden whitespace-pre-line`}
              >
                <h4 className="font-medium mb-2 text-lg text-charcoal">Step-by-step instructions:</h4>
                <div className="text-charcoal text-sm">
                  {reset.instructions}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResetCard;
