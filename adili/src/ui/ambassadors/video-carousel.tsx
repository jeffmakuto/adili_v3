'use client'

import Video from '@/ui/ambassadors/videos'
import SliderControls from '@/ui/ambassadors/controls'
import { SliderDots } from '@/ui/header/slider-controls'
import { useCarousel } from '@/hooks/video-carousel'
import videos from '@/data/videos'

/**
 * VideoCarousel Component
 * 
 * The `VideoCarousel` component is a carousel for displaying a series of videos.
 * Users can navigate between the videos using next/previous buttons or by
 * clicking on the dot navigation. The carousel supports smooth sliding transitions
 * between videos.
 * 
 * @returns JSX.Element
 */
const VideoCarousel: React.FC = () => {
  const { currentIndex, handleNext, handlePrev, setCurrentIndex } = useCarousel(videos.length);

  return (
    <div className="text-center pt-8 md:pt-16 lg:pt-8">
      <div className="relative w-full max-w-4xl mx-auto p-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Video className="w-full" videoSrc={video.src} isActive={currentIndex === index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          {/* Slider Controls (Previous and Next Buttons) */}
          <SliderControls prevSlide={handlePrev} nextSlide={handleNext} />

          {/* Dot Navigation for Video Carousel */}
          <SliderDots images={videos} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
