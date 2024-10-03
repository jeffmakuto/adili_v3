import Link from 'next/link'
import { LearnMoreButtonProps } from '@/types/learn-more'

const ChatButton: React.FC<LearnMoreButtonProps> = ({ subLink }) => {
    return (
      <div className="flex justify-center mt-4">
        <Link
          href={subLink.href}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Go to Adili Chat &gt;&gt;
        </Link>
      </div>
    );
  };

export default ChatButton;
