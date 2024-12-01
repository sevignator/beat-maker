import React from 'react';

interface PadProps {
  position: number;
  currentBar: number;
}

function Pad({ position, currentBar }: PadProps) {
  const [isActive, setIsActive] = React.useState(false);

  if (isActive && position === currentBar) {
    console.log('Tick!');
  }

  return (
    <button
      className={`w-24 aspect-square transition-transform ${
        isActive ? 'bg-violet-700' : 'bg-gray-300'
      } ${position === currentBar ? 'scale-110' : ''}`}
      onClick={() => setIsActive(!isActive)}
      data-position={position}
    />
  );
}

export default Pad;
