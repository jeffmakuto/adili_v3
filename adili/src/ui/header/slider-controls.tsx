import { SliderControlsProps, SliderDotsProps } from '@/types/slider'
import { ChevronLeftIcon, ChevronRightIcon } from '@/ui/header/chevron-icons'

export const SliderControls: React.FC<SliderControlsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <button
        aria-label="Previous Slide"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6
          lg:h-7 lg:w-7 flex items-center justify-center"
        onClick={prevSlide}
      >
        <ChevronLeftIcon />
      </button>
      <button
        aria-label="Next Slide"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6
          lg:h-7 lg:w-7 flex items-center justify-center"
        onClick={nextSlide}
      >
        <ChevronRightIcon />
      </button>
    </>
  );
};

export function SliderDots({ images, currentIndex, setCurrentIndex }: SliderDotsProps): JSX.Element {
  return (
    <div className="absolute bottom-4 w-full flex justify-center space-x-1 md:space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
            index === currentIndex ? "bg-red-600" : "bg-gray-100"
          } transition-all duration-300`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
}