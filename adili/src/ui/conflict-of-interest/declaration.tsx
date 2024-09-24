import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { heading, paragraph } from '@/styles/values';
import { DeclarationProps } from '@/types/policies';
import DeclarationButton from '@/ui/buttons/declaration';

const Declaration: React.FC<DeclarationProps> = ({ declarationLink }) => {
    return (
        <div className="flex flex-col md:flex-row justify-start p-4 md:space-x-48">
            <div className="flex flex-col shadow-lg rounded-lg hover:scale-105
             bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6">
                <h2 className={heading}>
                    <FontAwesomeIcon
                        icon={faClipboard}
                        className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                        aria-label="Declaration Icon"
                    />
                    Declaration
                </h2>
                <p className={`${paragraph} mb-4`}>
                    To declare any conflicts of interest, please fill out the declaration form.
                </p>
            </div>
            <div className="mt-8">
                <DeclarationButton link={declarationLink} />
            </div>
        </div>
    );
};

export default Declaration;
