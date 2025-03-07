import React from 'react';
import { Dumbbell, Heart, Brain } from 'lucide-react';
import { cn } from '../lib/utils';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white space-y-6 animate-fade-in">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Dumbbell className="h-12 w-12 animate-bounce" />
          <span className="text-4xl font-bold">FitFlex</span>
        </div>
        <p className="text-xl font-light max-w-md mx-auto">
          Your AI-Powered Fitness Companion
        </p>
        <div className="flex justify-center space-x-8 mt-12">
          <div className={cn(
            "flex flex-col items-center space-y-2",
            "animate-slide-up opacity-0",
            "animation-delay-300"
          )}>
            <Heart className="h-8 w-8" />
            <span>Health Tracking</span>
          </div>
          <div className={cn(
            "flex flex-col items-center space-y-2",
            "animate-slide-up opacity-0",
            "animation-delay-500"
          )}>
            <Brain className="h-8 w-8" />
            <span>AI Guidance</span>
          </div>
          <div className={cn(
            "flex flex-col items-center space-y-2",
            "animate-slide-up opacity-0",
            "animation-delay-700"
          )}>
            <Dumbbell className="h-8 w-8" />
            <span>Custom Workouts</span>
          </div>
        </div>
      </div>
    </div>
  );
}