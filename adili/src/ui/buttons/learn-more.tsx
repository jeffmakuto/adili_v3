import { FC } from 'react'
import Link from 'next/link'
import { LearnMoreButtonProps } from '@/types/learn-more'

/**
 * LearnMoreButton Component - A button that redirects users to a specified link.
 * 
 * @param subLink The link information, containing the `href` property.
 * 
 * @returns JSX.Element
 */
const LearnMoreButton: FC<LearnMoreButtonProps> = ({ subLink }) => {
    return (
      <div className="flex justify-center mt-4">
        <Link
          href={subLink.href}  /* This will route the user to the link provided in `subLink.href` */
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    );
};

export default LearnMoreButton;
