import { FaTimesCircle } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const Impact: React.FC = () => {
    return (
        <div className="p-4 mb-6">
            <div className="flex items-center">
                <FaTimesCircle
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Impact of Corruption Icon"
                />
                <h2 className={heading}>Impact of Corruption</h2>
            </div>
            <p className={paragraph}>
                Fraud, corruption and bribery erodes the much-needed resources we need to 
                operate effectively.
            </p>
        </div>
    );
};

export default Impact;