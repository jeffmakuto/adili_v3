import { FaBriefcase } from 'react-icons/fa'

/**
 * Header Component - Displays the header information.
 * 
 * @returns JSX.Element
 */
const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaBriefcase
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="External Activities Principle Icon"
                />
                External Activities Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                Care should be taken to ensure external activities do not interfere with one&rsquo;s duties 
                and responsibilities.
            </p>
        </header>
    );
};

export default Header;
