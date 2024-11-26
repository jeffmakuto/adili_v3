import { FaRegFlag } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * Obligations Component - Displays a title and description regarding reporting obligations related to bribery.
 * 
 * This component informs users about the Kenyan legal requirement to report all forms of bribery within 24 hours.
 * It includes a link to the KQ ethics hotline for users to report unethical behavior.
 * 
 * @returns JSX.Element
 */
const Obligations: React.FC = () => {
    const kqEthicsHotlineUrl = process.env.NEXT_PUBLIC_KQ_ETHICS_HOTLINE_URL || '#';

    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaRegFlag
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Reporting Obligations Icon"
                />
                <h2 className={heading}>Reporting Obligations</h2>
            </div>
            <p className={paragraph}>
                The Kenyan law requires that you report all forms of 
                bribery <strong>within 24 hours</strong>. You can use 
                the <a href={kqEthicsHotlineUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 underline">KQ ethics hotline</a>.
            </p>
        </div>
    );
};

export default Obligations;
