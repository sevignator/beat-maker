import Controls from './Controls';
import TimeIndicator from './TimeIndicator';
import Track from './Track';

import kickSrc from '../sounds/kick.mp3';
import snareSrc from '../sounds/snare.mp3';
import hihatSrc from '../sounds/hihat.mp3';

function App() {
  return (
    <div className='max-w-screen-md mx-auto'>
      <header className='flex justify-between items-center mb-6 py-4'>
        <h1 className='text-3xl tracking-tight font-bold'>Beat Maker</h1>
        <Controls />
      </header>
      <div className='flex flex-col gap-4'>
        <TimeIndicator />
        <Track audioSrc={kickSrc} />
        <Track audioSrc={snareSrc} />
        <Track audioSrc={hihatSrc} />
      </div>
    </div>
  );
}

export default App;
