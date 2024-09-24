import { FaGavel } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const CommitmentToFairCompetition: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaGavel
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Commitment to Fair Competition</h2>
            </div>
            <p className={paragraph}>
                We should avoid all <strong>collusion and coercive practices</strong> that may 
                compromise fair competition in the market such as bid rigging, dividing the 
                market, price fixing, and unlawful boycotts.
            </p>
        </div>
    );
};

export default CommitmentToFairCompetition;
