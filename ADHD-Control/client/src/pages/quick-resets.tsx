import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RefreshCw, Timer, ArrowRight, Lightbulb, CheckCircle } from 'lucide-react';
import { getMicroResets } from '@/lib/data';
import type { Reset } from '@/lib/types';

interface QuickReset extends Reset {
  instruction: string;
  category: string;
  duration: string;
}

const QuickResets = () => {
  const [currentReset, setCurrentReset] = useState<QuickReset | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [hasUsedTodayNotification, setHasUsedTodayNotification] = useState(false);
  
  const [resets, setResets] = useState<QuickReset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const resetData = getMicroResets();
      // Map the data to match our interface with additional fields
      const mappedResets: QuickReset[] = resetData.map(reset => ({
        ...reset,
        instruction: reset.instructions || reset.description,
        category: 'Mindfulness',
        duration: '2 minutes'
      }));
      setResets(mappedResets);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load resets');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && isTimerActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isTimerActive) {
      setIsTimerActive(false);
    }
  }, [timeLeft, isTimerActive]);

  const getRandomReset = () => {
    if (resets.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * resets.length);
    const selectedReset = resets[randomIndex];
    setCurrentReset(selectedReset);
    
    // Parse duration string (e.g., "2 minutes" -> 120 seconds)
    const durationMatch = selectedReset.duration.match(/(\d+)\s*(minute|second)/i);
    if (durationMatch) {
      const value = parseInt(durationMatch[1]);
      const unit = durationMatch[2].toLowerCase();
      const seconds = unit.startsWith('minute') ? value * 60 : value;
      setTimeLeft(seconds);
    }
  };

  const startTimer = () => {
    setIsTimerActive(true);
    setHasUsedTodayNotification(true);
  };

  const resetTimer = () => {
    setIsTimerActive(false);
    if (currentReset) {
      const durationMatch = currentReset.duration.match(/(\d+)\s*(minute|second)/i);
      if (durationMatch) {
        const value = parseInt(durationMatch[1]);
        const unit = durationMatch[2].toLowerCase();
        const seconds = unit.startsWith('minute') ? value * 60 : value;
        setTimeLeft(seconds);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Breathing': 'bg-blue-light text-blue-dark',
      'Movement': 'bg-sage-light text-sage-dark',
      'Mindfulness': 'bg-pink-light text-pink-dark',
      'Cognitive': 'bg-purple-100 text-purple-700',
      'Sensory': 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-light/10 via-white to-blue-light/10 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage mx-auto mb-4"></div>
            <p className="text-charcoal/60">Loading your reset techniques...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-light/10 via-white to-blue-light/10 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Error loading reset techniques</p>
            <Button onClick={() => window.location.reload()} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light/10 via-white to-blue-light/10 p-4">
      <div className="max-w-4xl mx-auto pt-8 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-poppins font-medium text-charcoal mb-4">
            Quick ADHD Reset Techniques
          </h1>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Science-backed micro-techniques to help you regain focus and calm when feeling overwhelmed or scattered.
          </p>
        </motion.div>

        {/* Success notification */}
        <AnimatePresence>
          {hasUsedTodayNotification && timeLeft === 0 && !isTimerActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="max-w-md mx-auto mb-6"
            >
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Reset completed! How do you feel?</span>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generator Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white shadow-sm h-fit">
              <CardContent className="p-6">
                <h2 className="font-poppins font-medium text-xl text-charcoal mb-4 text-center">
                  Get a Random Reset
                </h2>
                <p className="text-charcoal/60 text-center mb-6 text-sm">
                  Click below to get a personalized reset technique based on your current needs.
                </p>
                
                <div className="text-center">
                  <Button
                    onClick={getRandomReset}
                    className="bg-sage hover:bg-sage-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                    disabled={isLoading}
                  >
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Generate Reset
                  </Button>
                </div>

                {currentReset && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 pt-6 border-t border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentReset.category)}`}>
                        {currentReset.category}
                      </span>
                      <span className="text-charcoal/60 text-sm flex items-center">
                        <Timer className="h-4 w-4 mr-1" />
                        {currentReset.duration}
                      </span>
                    </div>
                    
                    <h3 className="font-poppins font-medium text-lg text-charcoal mb-2">
                      {currentReset.title}
                    </h3>
                    
                    <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                      {currentReset.description}
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Instructions & Timer Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white shadow-sm h-fit">
              <CardContent className="p-6">
                {currentReset ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-poppins font-medium text-xl text-charcoal">
                        Your Reset
                      </h2>
                      {timeLeft > 0 && (
                        <div className="text-2xl font-mono font-bold text-sage">
                          {formatTime(timeLeft)}
                        </div>
                      )}
                    </div>

                    <div className="bg-sage-light/20 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-sage-dark mt-0.5" />
                        <div>
                          <h4 className="font-medium text-charcoal mb-2">Instructions:</h4>
                          <p className="text-charcoal/80 text-sm leading-relaxed">
                            {currentReset.instruction}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {!isTimerActive ? (
                        <Button
                          onClick={startTimer}
                          className="flex-1 bg-blue hover:bg-blue-dark text-white"
                          disabled={timeLeft === 0}
                        >
                          <Timer className="h-4 w-4 mr-2" />
                          Start Timer
                        </Button>
                      ) : (
                        <Button
                          onClick={resetTimer}
                          variant="outline"
                          className="flex-1"
                        >
                          Reset Timer
                        </Button>
                      )}
                      
                      <Button
                        onClick={getRandomReset}
                        variant="outline"
                        className="px-4"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {timeLeft === 0 && hasUsedTodayNotification && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <p className="text-green-800 text-sm text-center font-medium">
                          Great job! Take a moment to notice how you feel.
                        </p>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="h-8 w-8 text-sage-dark" />
                    </div>
                    <h3 className="font-poppins font-medium text-lg text-charcoal mb-2">
                      Ready to Reset?
                    </h3>
                    <p className="text-charcoal/60 text-sm">
                      Generate a reset technique to get started.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-blue-light/10 to-sage-light/10 border-0">
            <CardContent className="p-6">
              <h3 className="font-poppins font-medium text-lg text-charcoal mb-4 text-center">
                💡 Quick Tips for Success
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <h4 className="font-medium text-charcoal mb-1">Find Your Space</h4>
                  <p className="text-charcoal/70">Choose a quiet spot where you won't be interrupted</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-charcoal mb-1">Be Patient</h4>
                  <p className="text-charcoal/70">It's okay if your mind wanders - gently return focus</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-charcoal mb-1">Practice Regularly</h4>
                  <p className="text-charcoal/70">Even 2-3 times a week can make a difference</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickResets;