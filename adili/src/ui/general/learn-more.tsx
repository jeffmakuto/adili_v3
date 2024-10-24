import { LearnMoreButtonProps } from '@/types/general'

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ onClick }) => {
    return (
        <div className="flex justify-center mt-4">
            <button onClick={onClick} className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out">
                Learn More
            </button>
        </div>
    );
  };

  export default LearnMoreButton;