'use client'

import { useState } from 'react'
import VisionCard from '@/ui/home/vision/vision-card'
import LearnMoreButton from '@/ui/general/learn-more'

const Vision: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="md:pt-28">
      <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold">
        <em className="text-red-600">
          Vision
        </em>
      </h2>
      <p className="text-sm md:text-sm lg:text-lg">
        <em>
          <strong>
            To be Africa&rsquo;s<br />
            preferred and<br />
            sustainable<br />
            aviation group.
          </strong>
        </em>
      </p>
      <div className="flex">
        <LearnMoreButton onClick={handleLearnMoreClick} />
      </div>
      {isCardOpen && <VisionCard onClose={handleCloseCard} />}
    </div>
  );
};

export default Vision;
