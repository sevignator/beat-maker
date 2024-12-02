import useTempoContext from '../contexts/TempoContext';

export default function BpmInput() {
  const { bpm, setBpm } = useTempoContext();

  return (
    <div className='flex flex-col items-center max-w-fit'>
      <div>BPM: {bpm}</div>
      <label htmlFor='bpm-input'>
        <span className='sr-only'>BPM slider</span>
        <input
          id='bpm-input'
          type='range'
          value={bpm}
          min={60}
          max={300}
          onChange={(event) => {
            setBpm(Number.parseInt(event.target.value, 10));
          }}
        />
      </label>
    </div>
  );
}
