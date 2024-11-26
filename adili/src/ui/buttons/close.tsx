import { CloseButtonProps } from '@/types/close'

/**
 * CloseButton Component - A button that triggers the onClose function when clicked.
 * 
 * This component displays a "Close" button that applies specific styles. 
 * The onClick event calls the onClose function passed as a prop to close or dismiss the UI element.
 * 
 * @param onClose Function that is called when the button is clicked.
 * 
 * @returns JSX.Element
 */
const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => (
  <button
    onClick={onClose}
    className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
  >
    Close
  </button>
);

export default CloseButton;
