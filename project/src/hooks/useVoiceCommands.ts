import { useEffect, useCallback, useRef } from 'react';

export function useVoiceCommands(commands: {
  onStart?: () => void;
  onNext?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onStop?: () => void;
}) {
  const recognition = useRef<any>(null);
  const isInitialized = useRef(false);

  const processCommand = useCallback((transcript: string) => {
    const command = transcript.toLowerCase().trim();

    switch (command) {
      case 'start workout':
      case 'begin':
        commands.onStart?.();
        break;
      case 'next':
      case 'next exercise':
        commands.onNext?.();
        break;
      case 'pause':
      case 'pause workout':
        commands.onPause?.();
        break;
      case 'resume':
      case 'continue':
        commands.onResume?.();
        break;
      case 'stop':
      case 'end workout':
        commands.onStop?.();
        break;
    }
  }, [commands]);

  useEffect(() => {
    if (isInitialized.current) return;

    if ('webkitSpeechRecognition' in window && !recognition.current) {
      recognition.current = new (window as any).webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = false;

      recognition.current.onresult = (event: any) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            processCommand(event.results[i][0].transcript);
          }
        }
      };

      recognition.current.onerror = (event: any) => {
        if (event.error === 'not-allowed') {
          console.log('Speech recognition permission denied');
        }
      };

      try {
        recognition.current.start();
        isInitialized.current = true;
      } catch (error) {
        console.error('Failed to start speech recognition:', error);
      }
    } else if (!('webkitSpeechRecognition' in window)) {
      console.log('Speech recognition not supported');
    }

    return () => {
      if (recognition.current) {
        try {
          recognition.current.stop();
        } catch (error) {
          console.error('Failed to stop speech recognition:', error);
        }
      }
    };
  }, [processCommand]);

  return {
    isSupported: !!recognition.current,
  };
}