'use client'

import ImageSliderView from '@/ui/header/image-slider-view'
import { SliderControls, SliderDots } from '@/ui/header/slider-controls'
import { useImageSlider } from '@/hooks/use-image-slider'
import { images } from '@/data/slider'

export default function ImageSlider(): JSX.Element {
  const {
    currentIndex,
    setCurrentIndex,
    prevSlide,
    nextSlide,
    setIsHovered,
  } = useImageSlider();

  return (
    <div 
      className="relative w-full mx-auto mt-4"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageSliderView images={images} currentIndex={currentIndex} />
      <SliderControls 
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <SliderDots 
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}
