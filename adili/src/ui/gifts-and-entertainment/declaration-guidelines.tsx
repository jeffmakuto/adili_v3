import { FaClipboardCheck } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * DeclarationGuidelines Component - Displays the declaration guidelines information.
 * 
 * @returns JSX.Element
 */
const DeclarationGuidelines: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaClipboardCheck
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Declaration Guidelines</h2>
            </div>
            <p className={paragraph}>
                All gifts and entertainment above <strong>Kshs 5,000</strong> or equivalent 
                should be declared in the departmental gifts register and escalated to the Chief 
                People Officer for guidance on its management. This fosters transparency and 
                accountability.
            </p>
        </div>
    );
};

export default DeclarationGuidelines;
