import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="border-b dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">FitFlex</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/workouts" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Workouts
            </Link>
            <Link to="/diet" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Diet
            </Link>
            <Link to="/progress" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Progress
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}