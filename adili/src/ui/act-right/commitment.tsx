import { FaBell } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const Commitment: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-8 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaBell
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Our Commitment Icon"
                    />
                <h2 className={heading}>Our Commitment</h2>
            </div>
            <p className={paragraph}>
                KQ is committed to protecting whistleblowers and ensuring a safe environment for 
                reporting ethical concerns.
            </p>
        </div>
    );
};

export default Commitment;
