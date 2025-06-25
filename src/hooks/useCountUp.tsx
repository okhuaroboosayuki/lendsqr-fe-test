import { useEffect, useRef, useState } from "react";

export const useCountUp = (endValue: number, duration: number) => {
  const [count, setCount] = useState<number>(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const start = 0;
    const end = endValue; // the end value after the count stops
    const increment = end / (duration / 16.66); // 16.66 being milliseconds; Increment per frame using 60 fps
    let startTime: DOMHighResTimeStamp | null;

    const countUp = function (timeStamp: DOMHighResTimeStamp) {
      if (!startTime) startTime = timeStamp;
      const elapsed = timeStamp - startTime;

      if (elapsed < duration) {
        // continues counting if elapsed less than duration
        setCount(Math.min(end, Math.floor(start + increment * (elapsed / 16.66))));

        requestRef.current = requestAnimationFrame(countUp); // starts the next frame
      } else {
        setCount(end);
      }
    };

    requestRef.current = requestAnimationFrame(countUp); // starts animation

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [duration, endValue]);

  return count;
};
