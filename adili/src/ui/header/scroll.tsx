'use client'

import React from 'react'
import useScrollingAnimation from '@/hooks/scroll'
import scrollContent from '@/data/scroll-content.json'

const ScrollingMessage: React.FC = () => {
  const scrollDuration = 60;
  const messageRef = useScrollingAnimation(scrollDuration);

  const { title, description } = scrollContent.contents[0];
  const items = description.split(' • ');

  return (
    <div className="w-full py-2 shadow-lg">
      <div className="flex items-center whitespace-nowrap overflow-hidden">
        <div className="animate-scroll" ref={messageRef}>
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
          <span className="px-4 text-sm md:text-base lg:text-lg">
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">
              {title}
            </strong>
            <span className="text-black">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-red-600 px-2 text-xl font-bold">•</span>}
                  {item}
                </React.Fragment>
              ))}
            </span>
          </span>
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingMessage;
