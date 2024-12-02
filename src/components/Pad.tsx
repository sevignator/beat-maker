import React from 'react';

interface PadProps {
  audioSrc: string;
  position: number;
  currentBar: number;
}

function Pad({ audioSrc, position, currentBar }: PadProps) {
  const [isActive, setIsActive] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (isActive && position === currentBar) {
      const audioEl = audioRef.current;

      if (!audioEl) return;

      audioEl.currentTime = 0;
      audioEl.play();
    }
  }, [isActive, position, currentBar]);

  return (
    <>
      <div
        className={`w-24 aspect-square transition-transform cursor-pointer ${
          isActive ? 'bg-violet-700' : 'bg-gray-300'
        } ${position === currentBar ? 'scale-110' : ''}`}
        onClick={() => setIsActive(!isActive)}
        data-position={position}
      />
      <audio ref={audioRef} src={audioSrc}></audio>
    </>
  );
}

export default React.memo(Pad);
