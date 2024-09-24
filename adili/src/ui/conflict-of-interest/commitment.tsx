import { FaExclamationTriangle } from 'react-icons/fa';
import { heading, paragraph } from '@/styles/values';

const Commitment: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-8 rounded shadow-md">
            <div className="flex items-center">
                <FaExclamationTriangle className="mr-2 align-middle" size={20} aria-label="Our Commitment Icon" />
                <h2 className={heading}>Our Commitment</h2>
            </div>
            <p className={paragraph}>
                We operate at our best level of performance when all conflicts of interest are identified, analyzed, and managed.
            </p>
        </div>
    );
};

export default Commitment;
