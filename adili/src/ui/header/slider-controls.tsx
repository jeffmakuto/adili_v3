import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SliderControlsProps, SliderDotsProps } from '@/types/slider'

export function SliderControls({ prevSlide, nextSlide }: SliderControlsProps): JSX.Element {
  return (
    <>
      <button
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-12
            text-white flex items-center justify-center rounded-full hover:bg-red-600"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-2xl" />
      </button>
      <button
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-12
            text-white flex items-center justify-center rounded-full hover:bg-red-600"
        onClick={nextSlide}
      >
        <ChevronRight className="text-2xl" />
      </button>
    </>
  );
}
  
  export function SliderDots({ images, currentIndex, setCurrentIndex }: SliderDotsProps): JSX.Element {
    return (
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-100"}
                transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    );
  }
  