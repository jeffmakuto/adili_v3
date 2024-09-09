'use client'

import useScrollingAnimation from '@/hooks/scroll'
import scrollContent from '@/data/scroll-content.json'

const ScrollingMessage: React.FC = () => {
  const messageRef = useScrollingAnimation();

  return (
    <div className="w-full py-2 shadow-lg">
      <div className="flex items-center whitespace-nowrap overflow-hidden">
        <div className="animate-scroll" ref={messageRef}>
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
          <span className="px-4 text-sm md:text-base lg:text-lg">
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">
              {scrollContent.mission.title}
            </strong>
            <span className="text-black"> {scrollContent.mission.description}</span>
            <span className="px-2 text-red-600 text-xl" style={{ fontWeight: 'bold' }}>|</span>
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">
              {scrollContent.vision.title}
            </strong>
            <span className="text-black"> {scrollContent.vision.description}</span>
            <span className="px-2 text-red-600 text-xl" style={{ fontWeight: 'bold' }}>|</span>
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">
              {scrollContent.values.title}
            </strong>
            <span className="text-black"> {scrollContent.values.description}</span>
          </span>
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingMessage;
