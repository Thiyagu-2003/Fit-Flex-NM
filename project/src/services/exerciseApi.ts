import axios from 'axios';
import { Exercise } from '../types/exercise';
import { exercises as localExercises } from '../data/workouts';

const EXERCISE_API_URL = 'https://exercisedb.p.rapidapi.com';
const GIPHY_API_KEY = '3J2mekM2hGZe6Lk7n9eLF6CIVAm96dzt';
const RAPID_API_KEY = '90c3a63e1amsh1f979220e825a91p101626jsn5bfbb9adaa34';

// Common safety tips for different exercise types
const commonSafetyTips = {
  strength: [
    'Warm up properly before starting',
    'Maintain proper form throughout the movement',
    'Breathe steadily and don\'t hold your breath',
    'Start with lighter weights to perfect form',
  ],
  cardio: [
    'Stay hydrated throughout the workout',
    'Monitor your heart rate',
    'Wear appropriate footwear',
    'Stop if you feel dizzy or lightheaded',
  ],
  flexibility: [
    'Don\'t bounce while stretching',
    'Stretch to the point of tension, not pain',
    'Hold stretches for 15-30 seconds',
    'Breathe deeply and regularly',
  ],
};

// Common mistakes for different exercise types
const commonMistakes = {
  strength: [
    'Using momentum instead of controlled movement',
    'Rushing through repetitions',
    'Not maintaining proper posture',
    'Lifting too heavy too soon',
  ],
  cardio: [
    'Not pacing yourself properly',
    'Poor breathing technique',
    'Overstriding while running',
    'Skipping warm-up',
  ],
  flexibility: [
    'Stretching cold muscles',
    'Forcing the stretch too far',
    'Not holding stretches long enough',
    'Incorrect alignment',
  ],
};

async function getExerciseGif(exercise: any): Promise<string | null> {
  try {
    // First try to get from ExerciseDB
    try {
      const response = await axios.get(`${EXERCISE_API_URL}/exercises/name/${exercise.name}`, {
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });

      if (response.data && response.data.length > 0 && response.data[0].gifUrl) {
        return response.data[0].gifUrl;
      }
    } catch (error) {
      console.error('Error fetching from ExerciseDB:', error);
    }

    // Fallback to GIPHY if ExerciseDB fails
    const searchTerms = [
      exercise.name,
      'exercise',
      'proper form',
      exercise.equipment !== 'None' ? exercise.equipment : '',
      exercise.muscle
    ].filter(Boolean);

    const searchQuery = searchTerms.join(' ');

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: searchQuery,
        limit: 1,
        rating: 'g'
      }
    });

    if (response.data.data.length > 0) {
      return response.data.data[0].images.original.url;
    }
    return null;
  } catch (error) {
    console.error('Error fetching exercise GIF:', error);
    return null;
  }
}

export async function fetchExercises(filters: {
  muscle?: string;
  difficulty?: string;
  equipment?: string;
}): Promise<Exercise[]> {
  try {
    // First try to fetch from ExerciseDB
    try {
      const response = await axios.get(`${EXERCISE_API_URL}/exercises`, {
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        },
        params: filters
      });

      return await Promise.all(response.data.map(async (exercise: any) => ({
        id: exercise.id,
        name: exercise.name,
        type: exercise.type,
        muscle: exercise.muscle,
        equipment: exercise.equipment,
        difficulty: exercise.difficulty,
        instructions: exercise.instructions || [],
        gifUrl: exercise.gifUrl || await getExerciseGif(exercise),
        videoUrl: null,
        thumbnailUrl: null,
        calories: Math.floor(Math.random() * 200) + 100,
        sets: 3,
        reps: "10-12",
        variations: [],
        safetyTips: commonSafetyTips[exercise.type as keyof typeof commonSafetyTips] || [],
        commonMistakes: commonMistakes[exercise.type as keyof typeof commonMistakes] || []
      })));
    } catch (error) {
      console.error('Error fetching from ExerciseDB:', error);
    }

    // Fallback to local exercises if ExerciseDB fails
    const allExercises = await Promise.all(Object.entries(localExercises).flatMap(([muscleGroup, difficultyLevels]) =>
      Object.entries(difficultyLevels).flatMap(([difficulty, exerciseList]) =>
        (exerciseList as any[]).map(async (exercise, index) => ({
          id: `${muscleGroup}-${difficulty}-${index}`,
          name: exercise.name,
          type: 'strength',
          muscle: muscleGroup,
          equipment: exercise.equipment,
          difficulty: difficulty as 'beginner' | 'intermediate' | 'advanced',
          instructions: exercise.instructions || [],
          gifUrl: exercise.gifUrl || await getExerciseGif(exercise),
          videoUrl: null,
          thumbnailUrl: null,
          calories: exercise.calories || Math.floor(Math.random() * 200) + 100,
          sets: exercise.sets || 3,
          reps: exercise.reps || "10-12",
          variations: exercise.variations || [],
          safetyTips: exercise.safetyTips || commonSafetyTips.strength,
          commonMistakes: exercise.commonMistakes || commonMistakes.strength,
        }))
      )
    ));

    // Apply filters
    return allExercises.filter(exercise => {
      if (filters.muscle && filters.muscle !== 'all') {
        if (filters.muscle === 'arms') {
          if (!['biceps', 'triceps', 'arms'].includes(exercise.muscle.toLowerCase())) {
            return false;
          }
        } else if (exercise.muscle.toLowerCase() !== filters.muscle.toLowerCase()) {
          return false;
        }
      }
      
      if (filters.difficulty && filters.difficulty !== 'all' && 
          exercise.difficulty !== filters.difficulty) {
        return false;
      }
      
      if (filters.equipment && filters.equipment !== 'all') {
        const equipmentLower = exercise.equipment.toLowerCase();
        if (!equipmentLower.includes(filters.equipment.toLowerCase())) {
          return false;
        }
      }
      
      return true;
    });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error;
  }
}

export async function searchGifs(query: string): Promise<string[]> {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: query,
        limit: 5,
        rating: 'g'
      }
    });

    return response.data.data.map((gif: any) => gif.images.original.url);
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    return [];
  }
}