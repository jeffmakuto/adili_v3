'use client'

import ImageSliderView from '@/ui/header/image-slider-view'
import { RedSliderControls, SliderDots } from '@/ui/header/slider-controls'
import useImageSlider from '@/hooks/auto-swipe'
import { images } from '@/data/bulletins'

export default function ImageSlider(): JSX.Element {
  const {
    currentIndex,
    nextItem,
    prevItem,
    setIsHovered,
    handleDotClick,
  } = useImageSlider(images.length);

  return (
    <div
      className="relative w-full mx-auto mt-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Image Slider"
      role="region"
      tabIndex={0}
      aria-live="polite"
    >
      <ImageSliderView images={images} currentIndex={currentIndex} />

      <RedSliderControls 
        prevSlide={prevItem}
        nextSlide={nextItem}
      />
      
      <SliderDots 
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={handleDotClick}
      />
    </div>
  );
}