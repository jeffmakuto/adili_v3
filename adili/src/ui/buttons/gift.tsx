import { DeclarationButtonProps } from '@/types/policies'

/**
 * GiftRegister Component - A button that redirects users to a specified Gift Register URL.
 * 
 * This component renders a button that, when clicked, opens the link passed as a prop in a new tab.
 * It's styled with Tailwind CSS and includes hover effects and transitions.
 * 
 * @param link The URL to the Gift Register or resource to be accessed.
 * 
 * @returns JSX.Element
 */
const GiftRegister: React.FC<DeclarationButtonProps> = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out">
                Access Gift Register &gt;&gt;
            </button>
        </a>
    );
};

export default GiftRegister;
