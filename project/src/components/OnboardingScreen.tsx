import React from 'react';
import { LogIn, Mail, Apple } from 'lucide-react';
import { cn } from '../lib/utils';

interface OnboardingScreenProps {
  onLogin: (provider: 'google' | 'email' | 'apple') => void;
}

export function OnboardingScreen({ onLogin }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Welcome to FitFlex</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join millions achieving their fitness goals with AI-powered guidance
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onLogin('google')}
              className={cn(
                "w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white",
                "py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                "flex items-center justify-center space-x-3 border dark:border-gray-700"
              )}
            >
              <LogIn className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>

            <button
              onClick={() => onLogin('apple')}
              className={cn(
                "w-full bg-black text-white",
                "py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                "flex items-center justify-center space-x-3"
              )}
            >
              <Apple className="h-5 w-5" />
              <span>Continue with Apple</span>
            </button>

            <button
              onClick={() => onLogin('email')}
              className={cn(
                "w-full bg-blue-600 text-white",
                "py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                "flex items-center justify-center space-x-3"
              )}
            >
              <Mail className="h-5 w-5" />
              <span>Continue with Email</span>
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>By continuing, you agree to our</p>
            <div className="space-x-2">
              <button className="text-blue-600 hover:underline">Terms of Service</button>
              <span>&</span>
              <button className="text-blue-600 hover:underline">Privacy Policy</button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Personalized Workouts"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Personalized Workouts</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered routines tailored to your goals
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Smart Nutrition"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Smart Nutrition</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Customized meal plans that adapt to your preferences
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Progress Tracking"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Visual insights to monitor your fitness journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}