import { FaVolumeUp } from 'react-icons/fa'

const Header: React.FC = () => {
    const whistleblowingPolicyUrl = process.env.NEXT_PUBLIC_WB_POLICY_URL || '#';
    const consequenceManagementPolicyUrl = process.env.NEXT_PUBLIC_CM_POLICY_URL || '#';

    return (
        <header className="mb-4">
            <h1 className="flex items-center text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
                <FaVolumeUp
                    className="mr-2 mt-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    aria-label="Act Right, Speak Up Principle Icon"
                />
                Act Right, Speak Up Principle
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-gray-700 mb-2">
                We should promptly report any actual or possible violation of the code, misconduct, 
                or any illegal act that is not in the interest of the company. All ethical concerns 
                reported in good faith are taken seriously, treated confidentially, and investigated. 
                For more details, please refer to our&nbsp;
                <a 
                    href={whistleblowingPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 underline"
                >
                    Whistleblowing Policy
                </a>&nbsp;and&nbsp;
                <a 
                    href={consequenceManagementPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 underline"
                >
                    Consequence Management Policy
                </a>.
            </p>
        </header>
    );
};

export default Header;
