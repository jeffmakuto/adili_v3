import { FaPaperPlane } from 'react-icons/fa'
import { SendButtonProps } from '@/types/send'

/**
 * SendButton Component - A button with a paper plane icon that triggers the send action.
 * 
 * This component renders a button that, when clicked, triggers the onClick function.
 * The button includes a paper plane icon from react-icons to represent sending.
 * 
 * @param onClick Function to be executed when the button is clicked.
 * 
 * @returns JSX.Element
 */
const SendButton: React.FC<SendButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-[#0d0d0d] rounded-full hover:bg-[#1a1a1a] transition-colors"
  >
    <FaPaperPlane style={{ color: '#ffffff', fill: '#ffffff', fontSize: '24px' }} />
  </button>
);

export default SendButton;
