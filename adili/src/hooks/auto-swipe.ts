'use client'

import { useCallback, useEffect, useState } from 'react'

const useAutoSwipe = (itemCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }
    }, 10000);

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

const useImageSlider = (imagesLength: number) => {
  const { currentIndex, nextItem, prevItem, setCurrentIndex, isHovered, setIsHovered } = useAutoSwipe(imagesLength);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = useCallback(() => {
    setDirection('right');
    nextItem();
  }, [nextItem]);

  const handlePrev = useCallback(() => {
    setDirection('left');
    prevItem();
  }, [prevItem]);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  }, [currentIndex, setCurrentIndex]);

  return {
    currentIndex,
    nextItem: handleNext,
    prevItem: handlePrev,
    setCurrentIndex,
    isHovered,
    setIsHovered,
    direction,
    handleDotClick,
  };
};

export default useImageSlider;
