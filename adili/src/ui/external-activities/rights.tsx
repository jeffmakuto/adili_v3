import { FaUserTie } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const RespectingEmployeeRights: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaUserTie
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Respecting Employee Rights</h2>
            </div>
            <p className={paragraph}>
                To avoid misrepresenting the company on its people, brand or performance, we 
                should refer all matters related to external communication to the designated 
                Company spokesperson, or the Head of Corporate Communications.
            </p>
        </div>
    );
};

export default RespectingEmployeeRights;