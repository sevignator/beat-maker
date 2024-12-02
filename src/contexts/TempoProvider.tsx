import React from 'react';

import { TempoContext } from './TempoContext';
import { BARS_COUNT, DEFAULT_BPM } from '../constants';
import useAutoCounter from '../hooks/use-auto-counter';
import useKeydown from '../hooks/use-key';

interface TempoProviderProps {
  children: React.ReactNode;
}

function TempoProvier({ children }: TempoProviderProps) {
  const [bpm, setBpm] = React.useState(DEFAULT_BPM);
  const { count, isActive, startCounter, pauseCounter, resetCounter } =
    useAutoCounter(1, BARS_COUNT, 60_000 / bpm);

  useKeydown('Space', toggleActive);

  if (TempoContext === null) {
    throw new Error('There was problem with the TempoContext.');
  }

  function toggleActive() {
    if (isActive) pauseCounter();
    else startCounter();
  }

  return (
    <TempoContext.Provider
      value={{
        bpm,
        setBpm,
        count,
        isActive,
        startCounter,
        pauseCounter,
        resetCounter,
      }}
    >
      {children}
    </TempoContext.Provider>
  );
}

export default TempoProvier;
