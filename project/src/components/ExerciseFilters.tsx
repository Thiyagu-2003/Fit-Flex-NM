import React from 'react';
import { Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface ExerciseFiltersProps {
  onFilterChange: (filters: { muscle: string; difficulty: string; equipment: string }) => void;
}

export function ExerciseFilters({ onFilterChange }: ExerciseFiltersProps) {
  const [muscle, setMuscle] = React.useState('all');
  const [difficulty, setDifficulty] = React.useState('all');
  const [equipment, setEquipment] = React.useState('all');

  const muscles = [
    'all',
    'chest',
    'back',
    'shoulders',
    'legs',
    'arms',
    'core',
    'glutes',
    'cardio'
  ];

  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const equipments = [
    'all',
    'bodyweight',
    'dumbbell',
    'barbell',
    'machine',
    'cable',
    'kettlebell',
    'resistance band',
    'medicine ball'
  ];

  const handleFilterChange = (type: string, value: string) => {
    switch (type) {
      case 'muscle':
        setMuscle(value);
        break;
      case 'difficulty':
        setDifficulty(value);
        break;
      case 'equipment':
        setEquipment(value);
        break;
    }

    onFilterChange({
      muscle: type === 'muscle' ? value : muscle,
      difficulty: type === 'difficulty' ? value : difficulty,
      equipment: type === 'equipment' ? value : equipment,
    });
  };

  const resetFilters = () => {
    setMuscle('all');
    setDifficulty('all');
    setEquipment('all');
    onFilterChange({ muscle: 'all', difficulty: 'all', equipment: 'all' });
  };

  const hasActiveFilters = muscle !== 'all' || difficulty !== 'all' || equipment !== 'all';

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center space-x-1"
          >
            <X className="h-4 w-4" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Muscle Group</label>
          <div className="flex flex-wrap gap-2">
            {muscles.map((m) => (
              <button
                key={m}
                onClick={() => handleFilterChange('muscle', m)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm transition-colors",
                  muscle === m
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Difficulty</label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => handleFilterChange('difficulty', d)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm transition-colors",
                  difficulty === d
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Equipment</label>
          <div className="flex flex-wrap gap-2">
            {equipments.map((e) => (
              <button
                key={e}
                onClick={() => handleFilterChange('equipment', e)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm transition-colors",
                  equipment === e
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                {e.charAt(0).toUpperCase() + e.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="pt-4 border-t dark:border-gray-700">
          <h3 className="text-sm font-medium mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {muscle !== 'all' && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Muscle: {muscle.charAt(0).toUpperCase() + muscle.slice(1)}
              </span>
            )}
            {difficulty !== 'all' && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            )}
            {equipment !== 'all' && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Equipment: {equipment.charAt(0).toUpperCase() + equipment.slice(1)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}