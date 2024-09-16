import { FC } from 'react'
import Link from 'next/link'
import { LearnMoreButtonProps } from '@/types/learn-more'

const LearnMoreButton: FC<LearnMoreButtonProps> = ({ subLink }) => {
    return (
      <div className="flex justify-center mt-4">
        <Link
          href={subLink.href}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    );
  };

export default LearnMoreButton;
