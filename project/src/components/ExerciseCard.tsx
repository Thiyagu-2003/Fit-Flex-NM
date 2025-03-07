import React from 'react';
import { Play, Info, Dumbbell, Flame, AlertTriangle, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { Exercise } from '../types/exercise';
import { cn } from '../lib/utils';
import ReactPlayer from 'react-player/lazy';

interface ExerciseCardProps {
  exercise: Exercise;
  onStart: () => void;
  expanded: boolean;
  onToggleExpand: () => void;
}

export function ExerciseCard({ exercise, onStart, expanded, onToggleExpand }: ExerciseCardProps) {
  const [isVideoLoading, setIsVideoLoading] = React.useState(true);
  const [isGifLoading, setIsGifLoading] = React.useState(true);

  // Add null check and default to 'beginner' if difficulty is undefined
  const difficulty = exercise?.difficulty || 'beginner';

  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }[difficulty];

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (!exercise) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className={cn("px-2 py-1 rounded-full", difficultyColor)}>
                {capitalizeFirstLetter(difficulty)}
              </span>
              <span className="flex items-center text-gray-600 dark:text-gray-400">
                <Dumbbell className="h-4 w-4 mr-1" />
                {exercise.equipment}
              </span>
              <span className="flex items-center text-gray-600 dark:text-gray-400">
                <Flame className="h-4 w-4 mr-1" />
                {exercise.calories} cal
              </span>
            </div>
          </div>
          <button
            onClick={onToggleExpand}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            {expanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
          {exercise.videoUrl ? (
            <>
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
              )}
              <ReactPlayer
                url={exercise.videoUrl}
                width="100%"
                height="100%"
                controls
                light={exercise.thumbnailUrl}
                onReady={() => setIsVideoLoading(false)}
              />
            </>
          ) : exercise.gifUrl ? (
            <div className="relative w-full h-full">
              {isGifLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
              )}
              <img
                src={exercise.gifUrl}
                alt={`${exercise.name} demonstration`}
                className="w-full h-full object-cover"
                onLoad={() => setIsGifLoading(false)}
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Dumbbell className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>

        {expanded && (
          <div className="space-y-6 mt-6 animate-fade-in">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Info className="h-4 w-4 mr-2 text-blue-600" />
                Instructions
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                {exercise.instructions?.map((instruction, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {exercise.safetyTips?.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                  Safety Tips
                </h4>
                <ul className="space-y-2">
                  {exercise.safetyTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                      <span className="text-yellow-500">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exercise.commonMistakes?.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                  Common Mistakes to Avoid
                </h4>
                <ul className="space-y-2">
                  {exercise.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                      <span className="text-red-500">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exercise.variations?.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Variations</h4>
                <ul className="list-disc list-inside space-y-1">
                  {exercise.variations.map((variation, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">
                      {variation}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-3 gap-4 pt-4 border-t dark:border-gray-700">
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">{exercise.sets}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Sets</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">{exercise.reps}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Reps</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-600">60s</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Rest</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onStart}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Play className="h-5 w-5" />
          <span>Start Exercise</span>
        </button>
      </div>
    </div>
  );
}