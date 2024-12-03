import React from 'react';
import useTempoContext from '../contexts/TempoContext';

interface PadProps {
  audioSrc: string;
  position: number;
}

function Pad({ audioSrc, position }: PadProps) {
  const [isActive, setIsActive] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const { count } = useTempoContext();

  React.useEffect(() => {
    if (isActive && position === count) {
      const audioEl = audioRef.current;

      if (!audioEl) return;

      audioEl.currentTime = 0;
      audioEl.play();
    }
  }, [isActive, position, count]);

  return (
    <>
      <div
        className={`w-24 aspect-square transition-transform cursor-pointer rounded-md hover:scale-110 ${
          isActive ? 'bg-violet-700' : 'bg-gray-200'
        }`}
        onClick={() => setIsActive(!isActive)}
        data-position={position}
      />
      <audio ref={audioRef} src={audioSrc}></audio>
    </>
  );
}

export default React.memo(Pad);
