import { heading, paragraph } from '@/styles/values'
import { FaPhoneAlt } from 'react-icons/fa'
import EthicsHotlineImage from '@/ui/act-right/image'

/**
 * Hotline Component
 * 
 * This functional React component represents the "Reporting Hotline" section, which provides 
 * key information about the availability, confidentiality, and independence of the hotline. 
 * It includes a title with an icon, a styled list of hotline attributes, and an illustrative image.
 * 
 * The component leverages responsive design and modular styles for consistency and clarity.
 * 
 * @returns JSX.Element
 */
const Hotline: React.FC = () => {
    return (
        <>
            {/* Title with Icon */}
            <h2 className={`flex items-center mb-2 ${heading}`}>
                <FaPhoneAlt
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Reporting Hotline Icon"
                />
                Reporting Hotline
            </h2>

            {/* Hotline Attributes List */}
            <ul className={`list-disc list-inside mb-4 pl-4 ${paragraph}`}>
                <li>Available 24/7</li>
                <li className="text-red-600">Confidential</li>
                <li>Secure</li>
                <li className="text-red-600">Anonymity</li>
                <li>Impartial</li>
                <li className="text-red-600">Independent</li>
                <li>Protected from retaliation</li>
            </ul>

            {/* Illustrative Image */}
            <div className="mt-12">
                <EthicsHotlineImage />
            </div>
        </>
    );
};

export default Hotline;
