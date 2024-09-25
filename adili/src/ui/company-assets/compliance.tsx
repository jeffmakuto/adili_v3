import { FaFileContract } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const ComplianceWithPolicies: React.FC = () => {
    return (
        <div className="p-4 mb-6">
            <div className="flex items-center">
                <FaFileContract
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Compliance with Policies Icon"
                />
                <h2 className={heading}>Compliance with Policies</h2>
            </div>
            <p className={paragraph}>
                We must all comply to the KQ information security policies and data protection 
                policies to guide you on how to handle information.
            </p>
        </div>
    );
};

export default ComplianceWithPolicies;