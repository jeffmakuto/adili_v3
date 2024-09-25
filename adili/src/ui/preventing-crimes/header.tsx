import { FaLock } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaLock
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Preventing Criminal Financing Activities Principle Icon"
                />
                Preventing Criminal Financing Activities Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700">
                We shall not engage in money laundering practices which is the criminal practice of filtering 
                money which has come from illegal activities through a series of transactions in order 
                to 'clean' it and give it the appearance of being from legitimate sources.
            </p>
        </header>
    );
};

export default Header;
