import React from 'react';
import { Apple, Coffee, Sun, Moon, Leaf, Dumbbell, Heart, Globe } from 'lucide-react';
import { DietGoal, CuisineType } from '../types/user';
import { indianMealPlans, internationalMealPlans } from '../data/meals';
import { cn } from '../lib/utils';

export function Diet() {
  const [selectedGoal, setSelectedGoal] = React.useState<DietGoal>('general-fitness');
  const [cuisineType, setCuisineType] = React.useState<CuisineType>('indian');
  const [waterProgress, setWaterProgress] = React.useState(75); // percentage

  const goals = [
    { id: 'weight-loss' as DietGoal, label: 'Weight Loss', icon: Leaf, color: 'text-green-600' },
    { id: 'muscle-gain' as DietGoal, label: 'Muscle Gain', icon: Dumbbell, color: 'text-blue-600' },
    { id: 'general-fitness' as DietGoal, label: 'General Fitness', icon: Heart, color: 'text-red-600' }
  ];

  const mealPlans = cuisineType === 'indian' ? indianMealPlans : internationalMealPlans;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Diet Plan</h1>
        <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-lg">
          <Apple className="h-5 w-5 text-green-600 dark:text-green-400" />
          <span className="font-medium">1,500 calories/day</span>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Choose Your Goal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goals.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setSelectedGoal(id)}
              className={cn(
                "p-4 rounded-lg border-2 transition-all",
                selectedGoal === id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
              )}
            >
              <Icon className={cn("h-6 w-6 mb-2", color)} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Meal Plans</h2>
          <div className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
            <button
              onClick={() => setCuisineType('indian')}
              className={cn(
                "px-4 py-2 rounded-md flex items-center space-x-2 transition-colors",
                cuisineType === 'indian' ? "bg-white dark:bg-gray-600 shadow" : ""
              )}
            >
              <Sun className="h-4 w-4" />
              <span>Indian</span>
            </button>
            <button
              onClick={() => setCuisineType('international')}
              className={cn(
                "px-4 py-2 rounded-md flex items-center space-x-2 transition-colors",
                cuisineType === 'international' ? "bg-white dark:bg-gray-600 shadow" : ""
              )}
            >
              <Globe className="h-4 w-4" />
              <span>International</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {mealPlans.map((plan, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Sun className="h-5 w-5 text-orange-500" />
                <h3 className="font-semibold">{plan.day}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {plan.meals[selectedGoal]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Water Intake Tracker</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${waterProgress}%` }}
            />
          </div>
          <span className="font-medium">1.5L / 2L</span>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">6-Week Plan Overview</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Week 2: Include seasonal fruits & vegetables</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Week 3: Introduce different protein sources</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Week 4: Experiment with spices & flavors</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Week 5: Include healthy snacks & hydration tips</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Week 6: Balanced approach with custom adjustments</span>
          </div>
        </div>
      </div>
    </div>
  );
}