import { FaCheckCircle } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const MaintainingInformationAccuracy: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaCheckCircle
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Maintaining Information Accuracy Icon"
                />
                <h2 className={heading}>Maintaining Information Accuracy</h2>
            </div>
            <p className={paragraph}>
                We must ensure information is kept accuracy, including contracts, and pricing 
                information to marketing plans, technical specifications and employee information.
            </p>
        </div>
    );
};

export default MaintainingInformationAccuracy;