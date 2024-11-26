import { FaHandsHelping } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * ZeroTolerancePolicy - Displays the zero-tolerance policy for human trafficking, harassment, bullying and discrimination.
 */
const ZeroTolerancePolicy: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaHandsHelping
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Zero-Tolerance Policy</h2>
            </div>
            <p className={paragraph}>
                Kenya Airways has a zero-tolerance approach to human <strong>trafficking, harassment, bullying and discrimination.​</strong>
            </p>
        </div>
    );
};

export default ZeroTolerancePolicy;
