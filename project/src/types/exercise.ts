export interface Exercise {
  id: string;
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
  gifUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  calories: number;
  sets: number;
  reps: number;
  variations: string[];
  safetyTips: string[];
  commonMistakes: string[];
}

export interface ExerciseFilters {
  muscle: string;
  difficulty: string;
  equipment: string;
}

export interface VoiceCommandState {
  isEnabled: boolean;
  isListening: boolean;
}