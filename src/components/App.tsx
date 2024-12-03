import Header from './Header';
import TimeIndicator from './TimeIndicator';
import Track from './Track';

import kickSrc from '../sounds/kick.mp3';
import snareSrc from '../sounds/snare.mp3';
import hihatSrc from '../sounds/hihat.mp3';

function App() {
  return (
    <>
      <Header />

      <div className='flex flex-col gap-4 max-w-screen-md mx-auto'>
        <TimeIndicator />
        <Track audioSrc={kickSrc} />
        <Track audioSrc={snareSrc} />
        <Track audioSrc={hihatSrc} />
      </div>
    </>
  );
}

export default App;
