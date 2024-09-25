'use client'

import { FaBuilding } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaBuilding
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Conflict of Interest Icon"
                />
                Company Assets Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                We should protect the Company&rsquo;s assets and use them in the manner intended. Safeguarding 
                nonpublic information is everyone&rsquo;s responsibility.
            </p>
        </header>
    );
};

export default Header;
