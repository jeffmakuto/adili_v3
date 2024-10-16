'use client'

import ImageSliderView from '@/ui/header/image-slider-view'
import { RedSliderControls, SliderDots } from '@/ui/header/slider-controls'
import useAutoSwipe from '@/hooks/auto-swipe'
import { images } from '@/data/bulletins'

export default function ImageSlider(): JSX.Element {
  const {
    currentIndex,
    setCurrentIndex,
    nextItem,
    prevItem,
    setIsHovered,
  } = useAutoSwipe(images.length);

  return (
    <div 
      className="relative w-full mx-auto mt-4"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageSliderView images={images} currentIndex={currentIndex} />
      <RedSliderControls 
        prevSlide={prevItem}
        nextSlide={nextItem}
      />
      <SliderDots 
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}
