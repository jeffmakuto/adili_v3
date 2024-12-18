import { FaHandHoldingUsd } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * Duty Component - Displays a message about the organization's duty to prevent corruption.
 * 
 * This component features a section with a heading, an icon, and a description about the duty to prevent corruption within a business.
 * The component uses styles from Tailwind CSS and custom styles from `@/styles/values` for layout and typography.
 * It incorporates an icon (`FaHandHoldingUsd`) to visually represent the message.
 * 
 * @returns JSX.Element
 */
const Duty: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaHandHoldingUsd
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Duty to Prevent Corruption Icon"
                />
                <h2 className={heading}>Duty to Prevent Corruption</h2>
            </div>
            <p className={paragraph}>
                We have a duty to prevent all forms of corruption and fraud that may exist in the 
                business so as to strengthen internal controls and manage risks effectively.
            </p>
        </div>
    );
};

export default Duty;
