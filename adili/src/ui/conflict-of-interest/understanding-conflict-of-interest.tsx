import { FaClipboardCheck } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * UnderstandingConflictOfInterest Component - Displays conflict of interest information.
 * 
 * @returns JSX.Element
 */
const UnderstandingConflictOfInterest: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaClipboardCheck
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Understanding Conflict of Interest</h2>
            </div>
            <p className={paragraph}>
                For an employee, conflict of interest arises when your <strong>personal activities and relationships interfere or appear</strong> to
                interfere with your ability to perform your duty in the best interest of the Company. Board members and staff shall be expected
                not to use the power and authority vested in their roles in violation of their professional responsibility or for personal
                benefit.
            </p>
        </div>
    );
};

export default UnderstandingConflictOfInterest;
