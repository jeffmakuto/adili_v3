import { FaExclamationCircle } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * ImportantNotes Component - Displays the important notes information.
 * 
 * @returns JSX.Element
 */
const ImportantNotes: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaExclamationCircle
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Important Notes</h2>
            </div>
            <p className={paragraph}>
                Always prioritize ethical standards in all interactions. Gifts and entertainment 
                should never compromise your integrity or objectivity. If in doubt, consult the 
                Ethics and Integrity Office.
            </p>
        </div>
    );
};

export default ImportantNotes;
