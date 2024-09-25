import { FaUsers } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const RespectingEmployeeRights: React.FC = () => {
    return (
        <div className="p-4 mb-6">
            <div className="flex items-center">
                <FaUsers
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Respecting Employee Rights Icon"
                />
                <h2 className={heading}>Respecting Employee Rights</h2>
            </div>
            <p className={paragraph}>
                KQ respect the employees&rsquo; right to association as enshrined in the Constitution 
                of Kenya, however, staff shall not use their engagement with trade unions or labour 
                unions to malign or disparage the operations of the Company or make unsubstantiated 
                accusations against Company representatives.
            </p>
        </div>
    );
};

export default RespectingEmployeeRights;