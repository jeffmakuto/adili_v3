import { useEffect, useRef } from 'react'

/**
 * useScrollingAnimation - Custom hook to handle scrolling animation.
 * 
 * @param scrollDuration - Duration of the scrolling animation.
 * @returns Reference to the message element.
 */
const useScrollingAnimation = (scrollDuration: number) => {
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateAnimation = () => {
      if (messageRef.current) {
        /* Apply the animation duration dynamically */
        messageRef.current.style.setProperty('--scroll-duration', `${scrollDuration}s`);
      }
    };

    updateAnimation();
    
    const handleResize = () => {
      updateAnimation();
    };

    window.addEventListener('resize', handleResize);

    /* Optional: Using ResizeObserver if needed */
    const resizeObserver = new ResizeObserver(updateAnimation);
    const currentMessageRef = messageRef.current;
    if (currentMessageRef) {
      resizeObserver.observe(currentMessageRef);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMessageRef) {
        resizeObserver.unobserve(currentMessageRef);
      }
      resizeObserver.disconnect();
    };
  }, [scrollDuration]);

  return messageRef;
};

export default useScrollingAnimation;
