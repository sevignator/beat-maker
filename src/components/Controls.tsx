import BpmInput from './BpmInput';
import ControlButton from './ControlButton';
import { Pause, Play, Rewind, RotateCcw } from 'lucide-react';

import useTempoContext from '../contexts/TempoContext';

function Controls() {
  const { isActive, startCounter, pauseCounter, resetCounter } =
    useTempoContext();

  return (
    <div className='flex gap-4 items-center'>
      {isActive ? (
        <ControlButton
          icon={Pause}
          onClick={() => {
            if (isActive) pauseCounter();
            else startCounter();
          }}
        >
          Pause
        </ControlButton>
      ) : (
        <ControlButton
          icon={Play}
          onClick={() => {
            if (isActive) pauseCounter();
            else startCounter();
          }}
        >
          Play
        </ControlButton>
      )}

      <ControlButton icon={Rewind} onClick={resetCounter}>
        Restart
      </ControlButton>
      <ControlButton icon={RotateCcw} onClick={resetCounter}>
        Reset
      </ControlButton>
      <BpmInput />
    </div>
  );
}

export default Controls;
