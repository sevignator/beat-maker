import BpmInput from './BpmInput';
import ControlButton from './ControlButton';
import { Pause, Play, Rewind } from 'lucide-react';

import useTempoContext from '../contexts/TempoContext';

function Controls() {
  const { isActive, startCounter, pauseCounter, resetCounter } =
    useTempoContext();

  return (
    <div className='flex gap-4 items-center'>
      {isActive ? (
        <ControlButton
          icon={Pause}
          className='bg-orange-200 border-orange-300 text-orange-800'
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
          className='bg-green-200 border-green-300 text-green-800'
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
      <BpmInput />
    </div>
  );
}

export default Controls;
