import { useEffect, useState } from 'react'

/**
 * useAutoSwipe - Custom hook for auto-swiping images.
 * 
 * @param itemCount - Number of images.
 * @returns Object containing auto-swipe functionality.
 */
const useAutoSwipe = (itemCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [isHovered, itemCount]);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };

  return { currentIndex, setCurrentIndex, nextItem, prevItem, isHovered, setIsHovered };
};

export default useAutoSwipe;
