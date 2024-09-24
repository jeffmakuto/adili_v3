import { FaPeopleCarry } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const Commitment: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-8 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaPeopleCarry
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Our Commitment Icon"
                    />
                <h2 className={heading}>Our Commitment</h2>
            </div>
            <p className={paragraph}>
                At Kenya Airways, we are committed to maintaining a workplace that is safe, 
                inclusive and respectful. For this reason, we have a zero tolerance to 
                any form of sexual harassment.  The <strong>Sexual Harassment Policy</strong> provides more 
                details on this.​
            </p>
        </div>
    );
};

export default Commitment;
