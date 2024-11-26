import { heading, paragraph } from '@/styles/values'

/**
 * Guidelines Component - Displays the conflict of interest guidelines.
 * 
 * @returns JSX.Element
 */
const Guidelines: React.FC = () => {
    return (
        <>
            <h2 className={heading}>Guidelines</h2>
            <ul className={`list-disc list-inside mb-4 pl-4 ${paragraph}`}>
                <li className='mb-2'>Annually, we call on employees to declare actual or potential conflicts of interest on Ipride.</li>
                <li className='mb-2'><strong>6 key questions</strong> are asked to help ascertain if there is a potential conflict of interest.</li>
                <li className='mb-2'>Once a declaration is made, it is analyzed based on one’s duties and responsibilities.</li>
                <li className='mb-2'>If there is a risk of the conflict impacting one’s responsibilities, they will be notified, and an agreed plan of action developed.</li>
                <li>If a potential conflict arises during the year, one is expected to make this declaration on Ipride or notify the HR or Ethics office.</li>
            </ul>
        </>
    );
};

export default Guidelines;
