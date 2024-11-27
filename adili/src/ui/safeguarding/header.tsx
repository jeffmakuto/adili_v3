'use client'

import { FaShieldAlt } from 'react-icons/fa'

/**
 * Header Component - Displays the Header.
 * 
 * @returns JSX.Element
 */
const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaShieldAlt
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Conflict of Interest Icon"
                />
                Safeguarding Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                We recognize it&rsquo;s our responsibility to use our influence to promote and protect human 
                rights and ensuring that our business operations do not contribute directly or 
                indirectly to human rights abuses.​
            </p>
        </header>
    );
};

export default Header;
