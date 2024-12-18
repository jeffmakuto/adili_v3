'use client'

import { FaBalanceScale } from 'react-icons/fa'

/**
 * Header Component - Displays the header information.
 * 
 * @returns JSX.Element
 */
const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaBalanceScale
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Competition Law Principle Icon"
                />
                Competition Law Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                We operate within the laws and regulations of each country we operate in. This means that we 
                must comply with all anti-trust and competition laws which apply to our business and 
                promote fair competition in all our transactions.
            </p>
        </header>
    );
};

export default Header;
