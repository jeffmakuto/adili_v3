import { FaGlobe } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const EnvironmentalPolicy: React.FC = () => {
    const environmentalPolicyUrl = process.env.NEXT_PUBLIC_ENVIRONMENTAL_POLICY_URL || '#';
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaGlobe
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Environmental Policy Icon"
                />
                <h2 className={heading}>Environmental Policy Statement</h2>
            </div>
            <p className={paragraph}>
                Kenya Airways PLC is committed to developing, implementing, maintaining, monitoring, 
                and consistently improving strategies, systems, and processes to ensure that all our 
                activities are aimed at achieving the highest level of Environmental Protection and 
                Sustainability standards that meet legislative, regulatory, industry, and 
                international standards. You can view our full policy&nbsp;
                <a 
                    href={environmentalPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 underline"
                >
                    here
                </a>.
            </p>
        </div>
    );
};

export default EnvironmentalPolicy;