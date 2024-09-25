import { heading, paragraph } from '@/styles/values'
import { FaPhoneAlt } from 'react-icons/fa'

const Hotline: React.FC = () => {
    return (
        <>
            <h2 className={`flex items-center mb-2 ${heading}`}>
                <FaPhoneAlt
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Reporting Hotline Icon"
                />
                Reporting Hotline
            </h2>
            <ul className={`list-disc list-inside mb-4 pl-4 ${paragraph}`}>
                <li>Available 24/7</li>
                <li className="text-red-600">Confidential</li>
                <li>Secure</li>
                <li className="text-red-600">Anonymity</li>
                <li>Impartial</li>
                <li className="text-red-600">Independent</li>
                <li>Protected from retaliation</li>
            </ul>
        </>
    );
};

export default Hotline;
