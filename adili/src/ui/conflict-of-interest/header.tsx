import { FaUserShield } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaUserShield
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Conflict of Interest Icon"
                />
                Conflict of Interest Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                A conflict of interest arises when a business partner&rsquo;s or an employees&rsquo;s own personal (financial, social, political or other) interest or other activity or relationship interferes or has the potential to interfere with KQ&rsquo;s business interest.
            </p>
        </header>
    );
};

export default Header;
