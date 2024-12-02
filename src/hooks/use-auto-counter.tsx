import React from 'react';

function useAutoCounter(min = 1, max = 8, delay = 1000) {
  const [count, setCount] = React.useState(min);
  const [isActive, setIsActive] = React.useState(false);

  function startCounter() {
    setIsActive(true);
  }

  function pauseCounter() {
    setIsActive(false);
  }

  function resetCounter() {
    setCount(min);
  }

  React.useEffect(() => {
    if (!isActive) return;

    const intervalId = setInterval(function incrementCount() {
      setCount((prevCount) => {
        return prevCount !== max ? prevCount + 1 : min;
      });
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [min, max, delay, isActive]);

  return { count, isActive, startCounter, pauseCounter, resetCounter };
}

export default useAutoCounter;
