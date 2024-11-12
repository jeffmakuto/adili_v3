import { FaPaperPlane } from 'react-icons/fa'
import { SendButtonProps } from '@/types/send'

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-[#0d0d0d] rounded-full hover:bg-[#1a1a1a] transition-colors"
  >
    <FaPaperPlane style={{ color: '#ffffff', fill: '#ffffff', fontSize: '24px' }} />
  </button>
);

export default SendButton;
