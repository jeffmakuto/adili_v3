'use client'

import { FaBullhorn } from 'react-icons/fa'

/**
 * Header Component - Displays the header information.
 * 
 * @returns JSX.Element
 */
const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaBullhorn
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Conflict of Interest Icon"
                />
                Ethical Marketing Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                Marketing activities and expenditure including sponsorship, compliments, prizes and promotions 
                should always be for a valid business purpose geared towards positioning KQ products and services 
                and not to confer a personal benefit.
            </p>
        </header>
    );
};

export default Header;
