import { DeclarationButtonProps } from '@/types/policies'

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
