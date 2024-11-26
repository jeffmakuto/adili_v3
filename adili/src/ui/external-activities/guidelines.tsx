import { FaUserTie } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * CommunicationGuidelines Component - Displays communication guidelines information.
 * 
 * @returns JSX.Element
 */
const CommunicationGuidelines: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaUserTie
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Communication Guidelines Icon"
                />
                <h2 className={heading}>Communication Guidelines</h2>
            </div>
            <p className={paragraph}>
                To avoid misrepresenting the company on its people, brand or performance, we 
                should refer all matters related to external communication to the <strong>designated 
                Company spokesperson, or the Head of Corporate Communications.</strong>
            </p>
        </div>
    );
};

export default CommunicationGuidelines;