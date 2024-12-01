import React from 'react';

export default function useAutoCounter(min = 1, max = 8, delay = 1000) {
  const [count, setCount] = React.useState(min);

  React.useEffect(() => {
    const intervalId = setInterval(function incrementCount() {
      setCount((prevCount) => {
        return prevCount !== max ? prevCount + 1 : min;
      });
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [min, max, delay]);

  return count;
}
