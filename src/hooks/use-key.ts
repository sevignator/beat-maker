import React from 'react';

function useKeydown(code: string, callback: () => void) {
  React.useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.code !== code) return;

      callback();
    }

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [code, callback]);
}

export default useKeydown;
