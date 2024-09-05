import { useState, useEffect } from 'react';
import { UseHoverEffectParams } from '@/types/banners';

export default function useHoverEffect({
  maxIterations = Infinity,
  hoverDuration = 2000 // Total duration for three flicks
}: UseHoverEffectParams): boolean {
  const [hoverEffect, setHoverEffect] = useState<boolean>(false);
  const [iterationCount, setIterationCount] = useState<number>(0);

  useEffect(() => {
    if (iterationCount >= maxIterations) return;

    const flickCount = 3; // Number of flicks
    const flickDuration = hoverDuration / flickCount; // Duration for each flick
    const flickEffectDuration = flickDuration / 2; // Duration of the flick effect

    // Flick effect
    const flick = () => {
      setHoverEffect(true);
      setTimeout(() => setHoverEffect(false), flickEffectDuration); // Effect duration
    };

    // Start flicking
    let flicksCompleted = 0;
    const flickInterval = setInterval(() => {
      if (flicksCompleted < flickCount) {
        flick();
        flicksCompleted++;
      } else {
        clearInterval(flickInterval);
      }
    }, flickDuration);

    // Schedule pause and restart flicks
    const pauseDuration = hoverDuration + 3000; // Pause for total hoverDuration + 3 seconds
    const pauseInterval = setInterval(() => {
      if (iterationCount >= maxIterations) {
        clearInterval(pauseInterval);
        return;
      }
      setIterationCount(prevCount => prevCount + 1);
    }, pauseDuration);

    // Cleanup
    return () => {
      clearInterval(flickInterval);
      clearInterval(pauseInterval);
    };
  }, [iterationCount, maxIterations, hoverDuration]);

  return hoverEffect;
}
