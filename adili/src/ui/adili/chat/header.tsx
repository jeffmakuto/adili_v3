import Image from 'next/image'
import { HiOutlineArrowsExpand, HiX } from 'react-icons/hi'

/**
 * Header Component
 * 
 * This functional React component renders a header for the application. It includes:
 * - An avatar (displaying an image)
 * - A name and title for the AI assistant
 * - A toggle button to switch between fullscreen and minimized modes
 * 
 * The component is designed to be reusable and responsive, using Tailwind CSS for styling.
 * 
 * @param {Object} props
 * @param {() => void} props.onToggleFullscreen - Function to toggle the fullscreen mode.
 * @param {boolean} props.isFullscreen - Boolean indicating whether the app is in fullscreen mode.
 * 
 * @returns JSX.Element
 */
const Header = ({ onToggleFullscreen, isFullscreen }: { onToggleFullscreen: () => void; isFullscreen: boolean }) => {
  return (
    <header className="bg-gray-200 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        {/* Avatar */}
        <div className="mr-4">
          <Image 
            src='/images/banner.png' /* Path to the avatar image */
            alt='Avatar' /* Alt text for accessibility */
            width={100} 
            height={100}
            className='rounded-full' /* Rounded image for avatar style */
          />
        </div>

        {/* Name and Title */}
        <div>
          <div className="text-xl font-semibold">Adili</div> {/* Name */}
          <div className="text-sm text-gray-500">AI Assistant</div> {/* Title */}
        </div>

        {/* Maximize/Minimize Button */}
        <button 
          onClick={onToggleFullscreen} /* Callback to toggle fullscreen */
          className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 z-50"
        >
          {isFullscreen ? (
            <HiX className="text-xl" /> /* Close icon for fullscreen mode */
          ) : (
            <HiOutlineArrowsExpand className="text-xl" /> /* Expand icon for minimized mode */
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
