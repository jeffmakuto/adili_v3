import { useEffect, useRef } from 'react';

const useScrollingAnimation = () => {
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateAnimation = () => {
      if (messageRef.current) {
        const scrollDuration = 30; // Duration for scrolling

        messageRef.current.style.animation = `scroll ${scrollDuration}s linear infinite`;
      }
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
    };
  }, []);

  return messageRef;
};

export default useScrollingAnimation;
