'use client'

import useScrollingAnimation from '@/hooks/scroll'
import scrollContent from '@/data/scroll-content.json'

const ScrollingMessage: React.FC = () => {
  const scrollDuration = 60;
  const messageRef = useScrollingAnimation(scrollDuration);

  return (
    <div className="w-full py-2 shadow-lg">
      <div className="flex items-center whitespace-nowrap overflow-hidden">
        <div className="animate-scroll" ref={messageRef}>
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>

          {scrollContent.contents.map((content, index) => (
            <span key={index} className="px-4 text-sm md:text-base lg:text-lg">
              <strong className="text-red-600 text-base md:text-lg lg:text-xl">
                {content.title}
              </strong>
              <span className="text-black"> {content.description}</span>
              
              {/* Add a separator unless it's the last item */}
              {index < scrollContent.contents.length - 1 && (
                <span className="px-2 text-red-600 text-xl" style={{ fontWeight: 'bold' }}>|</span>
              )}
            </span>
          ))}

          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingMessage;
