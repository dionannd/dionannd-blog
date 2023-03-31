import { useEffect, useRef } from "react";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, delay) => {
  const savedCallback = useRef<(() => void) | null>(null);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
