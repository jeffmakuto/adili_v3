import { heading, paragraph } from '@/styles/values'
import { DeclarationProps } from '@/types/policies'
import DeclarationButton from '@/ui/buttons/declaration'

const Declaration: React.FC<DeclarationProps> = ({ declarationLink }) => {
    return (
        <div className="flex flex-col md:flex-row justify-start p-4 md:space-x-48">
            <div className="flex flex-col shadow-lg rounded-lg hover:scale-105">
                <h2 className={heading}>Declaration</h2>
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
