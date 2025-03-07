import React from 'react';
import { useVoiceCommands } from '../hooks/useVoiceCommands';
import { VoiceCommandToggle } from '../components/VoiceCommandToggle';
import { ExerciseCard } from '../components/ExerciseCard';
import { ExerciseFilters } from '../components/ExerciseFilters';
import { fetchExercises } from '../services/exerciseApi';
import { Exercise, ExerciseFilters as FilterTypes } from '../types/exercise';
import { Search, Loader2 } from 'lucide-react';

export function Workouts() {
  const [exercises, setExercises] = React.useState<Exercise[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [activeExercise, setActiveExercise] = React.useState<number | null>(null);
  const [expandedExercise, setExpandedExercise] = React.useState<string | null>(null);
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);
  const [isListening, setIsListening] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentFilters, setCurrentFilters] = React.useState<FilterTypes>({
    muscle: 'all',
    difficulty: 'all',
    equipment: 'all'
  });

  const { isSupported } = useVoiceCommands({
    onStart: () => activeExercise === null && exercises.length > 0 && startExercise(0),
    onNext: () => activeExercise !== null && nextExercise(),
    onPause: () => activeExercise !== null && pauseExercise(),
    onResume: () => activeExercise !== null && resumeExercise(),
    onStop: () => activeExercise !== null && stopExercise(),
  });

  const loadExercises = async (filters: FilterTypes) => {
    setLoading(true);
    setError(null);
    setCurrentFilters(filters);
    try {
      const data = await fetchExercises(filters);
      setExercises(data);
    } catch (error) {
      setError('Failed to load exercises. Please try again later.');
      console.error('Error loading exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadExercises({ muscle: 'all', difficulty: 'all', equipment: 'all' });
  }, []);

  const startExercise = (index: number) => {
    setActiveExercise(index);
    speak(`Starting ${exercises[index].name}`);
  };

  const nextExercise = () => {
    if (activeExercise !== null && activeExercise < exercises.length - 1) {
      setActiveExercise(activeExercise + 1);
      speak(`Next exercise: ${exercises[activeExercise + 1].name}`);
    }
  };

  const pauseExercise = () => {
    speak('Exercise paused');
  };

  const resumeExercise = () => {
    speak('Exercise resumed');
  };

  const stopExercise = () => {
    setActiveExercise(null);
    speak('Workout ended');
  };

  const speak = (text: string) => {
    if (voiceEnabled) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleVoiceCommands = () => {
    setVoiceEnabled(!voiceEnabled);
    setIsListening(!voiceEnabled);
  };

  const handleFilterChange = (filters: FilterTypes) => {
    // Reset expanded exercise when filters change
    setExpandedExercise(null);
    loadExercises(filters);
  };

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exercise.muscle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exercise.equipment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 text-lg mb-4">{error}</p>
          <button
            onClick={() => loadExercises({ muscle: 'all', difficulty: 'all', equipment: 'all' })}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Exercise Library</h1>
        {isSupported && (
          <VoiceCommandToggle
            isEnabled={voiceEnabled}
            isListening={isListening}
            onToggle={toggleVoiceCommands}
          />
        )}
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ExerciseFilters
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : filteredExercises.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No exercises found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">
                  {currentFilters.muscle !== 'all' 
                    ? `${currentFilters.muscle.charAt(0).toUpperCase() + currentFilters.muscle.slice(1)} Exercises` 
                    : 'All Exercises'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {filteredExercises.length} exercises found
                  {currentFilters.difficulty !== 'all' ? ` • ${currentFilters.difficulty} level` : ''}
                  {currentFilters.equipment !== 'all' ? ` • ${currentFilters.equipment} equipment` : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredExercises.map((exercise, index) => (
                  <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    onStart={() => startExercise(index)}
                    expanded={expandedExercise === exercise.id}
                    onToggleExpand={() => setExpandedExercise(
                      expandedExercise === exercise.id ? null : exercise.id
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}