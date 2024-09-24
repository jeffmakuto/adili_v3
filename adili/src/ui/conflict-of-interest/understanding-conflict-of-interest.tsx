import { FaClipboardCheck } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const UnderstandingConflictOfInterest: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded shadow-md">
            <div className="flex items-center">
                <FaClipboardCheck className="text-red-600 mr-2 mt-4" size={24} aria-label="Understanding Conflict of Interest Icon" />
                <h2 className={heading}>Understanding Conflict of Interest</h2>
            </div>
            <p className={paragraph}>
                For an employee, conflict of interest arises when your <strong>personal activities and relationships interfere or appear</strong>
                to interfere with your ability to perform your duty in the best interest of the Company. Board members and staff shall be expected
                not to use the power and authority vested in their roles in violation of their professional responsibility or for personal
                benefit. ​
            </p>
        </div>
    );
};

export default UnderstandingConflictOfInterest;
