'use client'

import ImageSliderView from '@/ui/header/image-slider-view'
import { RedSliderControls, SliderDots } from '@/ui/header/slider-controls'
import useImageSlider from '@/hooks/auto-swipe'
import { images } from '@/data/bulletins'

/**
 * ImageSlider Component
 * 
 * The `ImageSlider` component displays an image carousel with automatic image
 * switching (auto swipe) and interactive controls, including next/previous buttons 
 * and clickable dots to navigate between images.
 * 
 * @returns JSX.Element
 */
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
      {/* Image Slider View */}
      <ImageSliderView images={images} currentIndex={currentIndex} />

      {/* Slider Control Buttons (Previous and Next) */}
      <RedSliderControls 
        prevSlide={prevItem}
        nextSlide={nextItem}
      />
      
      {/* Dot Navigation for Image Slider */}
      <SliderDots 
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={handleDotClick}
      />
    </div>
  );
}
