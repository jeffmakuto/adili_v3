import Image from 'next/image'
import { HiOutlineArrowsExpand, HiX } from 'react-icons/hi'

const Header = ({ onToggleFullscreen, isFullscreen }: { onToggleFullscreen: () => void; isFullscreen: boolean }) => {
  return (
    <header className="bg-gray-200 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        {/* Avatar */}
        <div className="mr-4">
          <Image 
            src='/images/bot.JPG'
            alt='Avatar' 
            width={100} 
            height={100}
            className='rounded-full'
          />
        </div>

        {/* Name and Title */}
        <div>
          <div className="text-xl font-semibold">Adili</div>
          <div className="text-sm text-gray-500">AI Assistant</div>
        </div>

        {/* Maximize/Minimize Button */}
        <button 
          onClick={onToggleFullscreen} 
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 z-50"
        >
          {isFullscreen ? (
            <HiX className="text-xl" />
          ) : (
            <HiOutlineArrowsExpand className="text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
