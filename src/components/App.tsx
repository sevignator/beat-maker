import React from 'react';

import Pad from './Pad';

import range from '../functions/range';
import useAutoCounter from '../hooks/use-auto-counter';
import BpmInput from './BpmInput';

const BARS_COUNT = 8;
const BPM = 60;

function App() {
  const [bpm, setBpm] = React.useState(BPM);
  const currentBar = useAutoCounter(1, BARS_COUNT, 60_000 / bpm);

  return (
    <div className='max-w-screen-md mx-auto'>
      <header className='flex justify-between items-center mb-6 py-4'>
        <h1 className='text-5xl font-bold'>Beat Maker</h1>
        <BpmInput bpm={bpm} setBpm={setBpm} />
      </header>
      <div className='flex gap-3'>
        {range(0, BARS_COUNT).map((index) => {
          const position = index + 1;
          return (
            <Pad key={position} position={position} currentBar={currentBar} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
