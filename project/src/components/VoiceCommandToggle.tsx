import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '../lib/utils';

interface VoiceCommandToggleProps {
  isEnabled: boolean;
  isListening: boolean;
  onToggle: () => void;
}

export function VoiceCommandToggle({ isEnabled, isListening, onToggle }: VoiceCommandToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300",
        "flex items-center justify-center",
        isEnabled ? (
          isListening
            ? "bg-green-500 text-white animate-pulse"
            : "bg-blue-600 text-white"
        ) : "bg-gray-200 text-gray-600"
      )}
    >
      {isEnabled ? (
        <Mic className="h-6 w-6" />
      ) : (
        <MicOff className="h-6 w-6" />
      )}
      <span className="sr-only">
        {isEnabled ? 'Disable' : 'Enable'} voice commands
      </span>
    </button>
  );
}