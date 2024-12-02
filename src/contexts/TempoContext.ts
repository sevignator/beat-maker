import React from 'react';

interface TempoContextProps {
  bpm: number;
  setBpm: (newBpm: number) => void;
  count: number;
  isActive: boolean;
  startCounter: () => void;
  pauseCounter: () => void;
  resetCounter: () => void;
}

export const TempoContext = React.createContext<TempoContextProps | null>(null);

export default function useTempoContext() {
  const tempoContext = React.useContext(TempoContext);

  if (!tempoContext) {
    throw new Error('Error getting TempoContext.');
  }

  return tempoContext;
}
