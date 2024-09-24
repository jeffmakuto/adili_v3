'use client'

import { FaBan } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaBan
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Conflict of Interest Icon"
                />
                Anti-Bribery and Anti-Corruption Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                Kenya Airways does not condone, the offering, promising to give or receiving of bribes or 
                any other form of improper payments, including facilitation payments.
            </p>
        </header>
    );
};

export default Header;
