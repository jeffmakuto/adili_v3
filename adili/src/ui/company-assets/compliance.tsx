import { FaFileContract } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const ComplianceWithPolicies: React.FC = () => {
    const acceptableUsePolicyUrl = process.env.NEXT_PUBLIC_ACCEPTABLE_USE_POLICY_URL || '#';
    const infoSecurityPolicyUrl = process.env.NEXT_PUBLIC_INFO_SECURITY_POLICY_URL || '#';
    const dataProtectionPolicyUrl = process.env.NEXT_PUBLIC_DATA_PROTECTION_POLICY_URL || '#';

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
                We must all comply with the&nbsp;
                <a 
                    href={acceptableUsePolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 underline"
                >
                    Acceptable Use Policy
                </a>, the&nbsp;
                <a 
                    href={infoSecurityPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 underline"
                >
                    Information Security Policy
                </a>, and the&nbsp;
                <a 
                    href={dataProtectionPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 underline"
                >
                    Data Protection Policy
                </a>&nbsp;to guide you on how to handle information.
            </p>
        </div>
    );
};

export default ComplianceWithPolicies;
