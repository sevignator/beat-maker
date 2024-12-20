import { BARS_COUNT } from '../constants';
import useTempoContext from '../contexts/TempoContext';
import range from '../functions/range';

function TimeIndicator() {
  const { count } = useTempoContext();

  return (
    <div
      className={`grid gap-3`}
      style={{ gridTemplateColumns: `repeat(${BARS_COUNT}, minmax(0, 1fr))` }}
    >
      {range(0, BARS_COUNT).map((index) => {
        const position = index + 1;
        return (
          <div key={position} className='flex flex-col items-center gap-2'>
            <div
              className={`w-4 aspect-square bg-red-50 rounded-full transition-colors ${
                position === count ? 'bg-red-500' : ''
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TimeIndicator;
