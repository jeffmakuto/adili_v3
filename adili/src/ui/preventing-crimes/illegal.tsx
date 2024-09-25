import { FaFileInvoice } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const NoSupportForIllegalActivities: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaFileInvoice
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="No Support for Illegal Activities Icon"
                />
                <h2 className={heading}>No Support for Illegal Activities</h2>
            </div>
            <p className={paragraph}>
                We shall not support terrorist financing which is financial support, in any form, 
                to terrorism or of those who encourage, plan, or engage in terrorism.
            </p>
        </div>
    );
};

export default NoSupportForIllegalActivities;