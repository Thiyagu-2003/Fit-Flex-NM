export interface UserProfile {
  name: string;
  age: number;
  height: number;
  weight: number;
  gender: 'male' | 'female';
}

export interface WorkoutPlan {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  calories: number;
  category: 'Full Body' | 'Arms' | 'Legs' | 'Core' | 'Custom';
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  restTime: number;
  gifUrl?: string;
  instructions?: string[];
}

export type DietGoal = 'weight-loss' | 'muscle-gain' | 'general-fitness';
export type CuisineType = 'indian' | 'international';

export interface MealPlan {
  day: string;
  meals: {
    'weight-loss': string;
    'muscle-gain': string;
    'general-fitness': string;
  };
}