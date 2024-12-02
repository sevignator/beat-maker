import Pad from './Pad';

import { BARS_COUNT } from '../constants';
import useTempoContext from '../contexts/TempoContext';
import range from '../functions/range';

interface TrackProps {
  audioSrc: string;
}

function Track({ audioSrc }: TrackProps) {
  const { count } = useTempoContext();

  return (
    <div className='flex gap-3'>
      {range(0, BARS_COUNT).map((index) => {
        const position = index + 1;
        return (
          <Pad
            key={position}
            audioSrc={audioSrc}
            position={position}
            currentBar={count}
          />
        );
      })}
    </div>
  );
}

export default Track;
