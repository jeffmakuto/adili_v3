import { useEffect, useRef } from 'react';

const useScrollingAnimation = (scrollDuration: number) => {
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateAnimation = () => {
      if (messageRef.current) {
        // Apply the animation duration dynamically
        messageRef.current.style.setProperty('--scroll-duration', `${scrollDuration}s`);
      }
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
    };
  }, [scrollDuration]);

  return messageRef;
};

export default useScrollingAnimation;
