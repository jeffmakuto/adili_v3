'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useAutoSwipe from '@/hooks/swipe'

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const items = React.Children.toArray(children);
  const { currentIndex, setCurrentIndex, nextItem, prevItem, setIsHovered } = useAutoSwipe(items.length);

  return (
    <div
      className="relative w-full mx-auto p-2 md:p-3 h-auto flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-grow text-center flex flex-col justify-center items-center mb-6">
        {items[currentIndex]}
      </div>
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex justify-between w-full">
          <CarouselControls nextItem={nextItem} prevItem={prevItem} />
          <div className="flex-grow flex justify-center">
            <SliderDotsContainer items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselControls: React.FC<{ nextItem: () => void; prevItem: () => void }> = ({ nextItem, prevItem }) => (
  <>
    <button
      onClick={prevItem}
      className="bg-gray-100 p-2 rounded-full shadow-lg hover:bg-red-600 transition absolute left-2"
      aria-label="Previous slide"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button
      onClick={nextItem}
      className="bg-gray-100 p-2 rounded-full shadow-lg hover:bg-red-600 transition absolute right-2"
      aria-label="Next slide"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </>
);

const SliderDotsContainer: React.FC<{ items: React.ReactNode[]; currentIndex: number; setCurrentIndex: (index: number) => void }> = ({ items, currentIndex, setCurrentIndex }) => (
  <div className="flex space-x-2">
    {items.map((_, index) => (
      <button
        key={index}
        className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
        onClick={() => setCurrentIndex(index)}
        aria-label={`Go to slide ${index + 1}`}
        tabIndex={0}
      />
    ))}
  </div>
);

export default Carousel;