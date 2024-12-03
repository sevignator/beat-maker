import Pad from './Pad';

import { BARS_COUNT } from '../constants';
import range from '../functions/range';

interface TrackProps {
  audioSrc: string;
}

function Track({ audioSrc }: TrackProps) {
  return (
    <div className='flex gap-3'>
      {range(0, BARS_COUNT).map((index) => {
        const position = index + 1;
        return <Pad key={position} audioSrc={audioSrc} position={position} />;
      })}
    </div>
  );
}

export default Track;
