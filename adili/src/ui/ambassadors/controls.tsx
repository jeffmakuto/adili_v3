import { VideoControlsProps } from '@/types/videos'

/**
 * VideoControls Component
 * 
 * The `VideoControls` component is a simple navigation control for video slides. 
 * It provides two buttons: one for going to the previous slide and one for 
 * moving to the next slide. These controls are typically used in video 
 * players or video carousels where multiple slides or videos need to be navigated.
 * 
 * @param {VideoControlsProps} props - The props for this component.
 * @param {Function} props.prevSlide - The function to navigate to the previous slide.
 * @param {Function} props.nextSlide - The function to navigate to the next slide.
 * 
 * @returns JSX.Element
 */
const VideoControls: React.FC<VideoControlsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className="flex justify-between mt-4">
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Next
      </button>
    </div>
  );
};

export default VideoControls;
