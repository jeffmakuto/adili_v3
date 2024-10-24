'use client'

import { useState } from 'react'
import VisionCard from '@/ui/home/vision/vision-card'
import LearnMoreButton from '@/ui/general/learn-more'
import { buttonWrapper } from '@/styles/values'

const Vision: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="pt-4">
      <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold">
        <em className="text-red-600">
          Our Vision
        </em>
      </h2>
      <p className="text-sm md:text-sm lg:text-lg">
        <em>
          <strong>
            To be Africa&rsquo;s preferred <span className="hidden md:inline"> <br /> </span>
            and sustainable aviation group.
          </strong>
        </em>
      </p>
      <div className={buttonWrapper}>
        <LearnMoreButton onClick={handleLearnMoreClick} />
      </div>
      {isCardOpen && <VisionCard onClose={handleCloseCard} />}
    </div>
  );
};

export default Vision;
