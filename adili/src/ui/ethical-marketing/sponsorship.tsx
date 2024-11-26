import { FaHandshake } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

/**
 * SponsorshipPolicy Component - Displays the sponsorship policy information.
 * 
 * @returns JSX.Element
 */
const SponsorshipPolicy: React.FC = () => {
    const sponsorshipPolicyUrl = process.env.NEXT_PUBLIC_SPONSORSHIP_POLICY_URL || '#';

    return (
        <div className="p-4 mb-6">
            <div className="flex items-center">
                <FaHandshake
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Sponsorship Policy</h2>
            </div>
            <p className={paragraph}>
                The <a href={sponsorshipPolicyUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 underline">sponsorship policy</a> offers 
                further guidance on how to go about this ethically.
            </p>
        </div>
    );
};

export default SponsorshipPolicy;
