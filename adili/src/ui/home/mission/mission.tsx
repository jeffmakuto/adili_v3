'use client'

import { useState } from 'react'
import MissionCard from '@/ui/home/mission/mission-card'
import LearnMoreButton from '@/ui/general/learn-more'
import { buttonWrapper } from '@/styles/values'

/**
 * Mission Component - Displays the Mission Information.
 * 
 * @returns JSX.Element
 */
const Mission: React.FC = () => {
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
          Our Mission
        </em>
      </h2>
      <p className="text-sm md:text-sm lg:text-lg">
        <em>
          <strong>
            To propel Africa&rsquo;s prosperity by <span className="hidden md:inline"> <br /> </span> 
            connecting its people, cultures <span className="hidden md:inline"> <br /> </span> 
            and markets.
          </strong>
        </em>
      </p>
      <div className={buttonWrapper}>
        <LearnMoreButton onClick={handleLearnMoreClick} />
      </div>
      {isCardOpen && <MissionCard onClose={handleCloseCard} />}
    </div>
  );
};

export default Mission;
