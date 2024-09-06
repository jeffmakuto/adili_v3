'use client'
import useScrollingAnimation from '@/hooks/scroll'

const ScrollingMessage: React.FC = () => {
  const messageRef = useScrollingAnimation();

  return (
    <div className="w-full py-2 border border-white rounded-lg shadow-lg">
      <div className="flex items-center whitespace-nowrap overflow-hidden">
        <div 
          className="animate-scroll"
          ref={messageRef}
        >
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
          <span className="px-4 text-sm md:text-base lg:text-lg">
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">Our Mission:</strong>
            <span className="text-black"> To propel Africa&apos;s prosperity by connecting its people, cultures, and markets.</span>
            <span className="px-2 text-red-600 text-xl" style={{ fontWeight: 'bold' }}>|</span>
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">Our Vision:</strong>
            <span className="text-black"> To be Africa&apos;s preferred and sustainable aviation group.</span>
            <span className="px-2 text-red-600 text-xl" style={{ fontWeight: 'bold' }}>|</span>
            <strong className="text-red-600 text-base md:text-lg lg:text-xl">Our Values:</strong>
            <span className="text-black"> Safety, Customer Obsession, Integrity, Accountability</span>
          </span>
          <span className="text-red-600 px-4 text-2xl">&#9733;</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingMessage;
