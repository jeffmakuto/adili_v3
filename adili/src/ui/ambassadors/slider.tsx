'use client'

import MotionSlider from '@/ui/general/motion-slider'
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
    direction,
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
      <MotionSlider
        currentIndex={currentIndex}
        direction={direction}
      >
        <ImageSliderView images={images} currentIndex={currentIndex} />
      </MotionSlider>

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
