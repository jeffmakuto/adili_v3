import { FaRegHandshake } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const Guidelines: React.FC = () => {
    const integrityCodeUrl = process.env.NEXT_PUBLIC_IC_EMBED_SRC || '#';

    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaRegHandshake
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Engagement Guidelines</h2>
            </div>
            <p className={paragraph}>
                <strong>Competitor and customer engagement guidelines</strong> are provided in 
                the <a href={integrityCodeUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Integrity Code</a> to 
                ensure all interactions are above board.
            </p>
        </div>
    );
};

export default Guidelines;
