'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useAutoSwipe from '@/hooks/auto-swipe';
import { heading, paragraph } from '@/styles/values';
import LearnMoreButton from '@/ui/buttons/learn-more';
import { SliderDots } from '@/ui/header/slider-controls';

const Carousel: React.FC<{ items: Array<{ title: string; content: string; subLink: { href: string; label: string } }> }> = ({ items }) => {
  const { currentIndex, setCurrentIndex, nextItem, prevItem, setIsHovered } = useAutoSwipe(items.length);

  return (
    <div
      className="relative w-full mx-auto p-2 md:p-3 h-[500px] flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselContent item={items[currentIndex]} />
      <CarouselControls nextItem={nextItem} prevItem={prevItem} />
      <SliderDotsContainer items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
};

const CarouselContent: React.FC<{ item: { title: string; content: string; subLink: { href: string; label: string } } }> = ({ item }) => (
  <div className="flex-grow text-center flex flex-col justify-center items-center mb-6">
    <h2 className={`${heading} mb-2`}>{item.title}</h2>
    <p className={`${paragraph} mb-4`}>{item.content}</p>
    <LearnMoreButton subLink={item.subLink} />
  </div>
);

const CarouselControls: React.FC<{ nextItem: () => void; prevItem: () => void }> = ({ nextItem, prevItem }) => (
  <div className="flex justify-between items-center w-full mb-4">
    <button
      onClick={prevItem}
      className="bg-grey-100 p-2 rounded-full shadow-lg hover:bg-red-600 transition"
      aria-label="Previous slide"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button
      onClick={nextItem}
      className="bg-gray-100 p-2 rounded-full shadow-lg hover:bg-red-600 transition"
      aria-label="Next slide"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
);

const SliderDotsContainer: React.FC<{ items: Array<{ subLink: { href: string } }>; currentIndex: number; setCurrentIndex: (index: number) => void }> = ({ items, currentIndex, setCurrentIndex }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center md:bottom-2">
    <SliderDots
      images={items.map(item => ({ src: item.subLink.href, width: 100, height: 100 }))}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  </div>
);

export default Carousel;
