import { FaClipboardCheck } from 'react-icons/fa'
import { heading, paragraph } from '@/styles/values'

const GuidelinesForMarketingPromotions: React.FC = () => {
    return (
        <div className="bg-[#F9E9E4] border-l-4 border-red-600 p-4 mb-6 rounded-lg shadow-lg">
            <div className="flex items-center">
                <FaClipboardCheck
                    className="mr-2 mt-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    aria-label="Understanding Conflict of Interest Icon"
                />
                <h2 className={heading}>Guidelines for Marketing Promotions</h2>
            </div>
            <p className={paragraph}>
                Marketing promotions should not place undue pressure or coercion for a customer 
                to purchase our products, the customer should have the free will to select our 
                products.
            </p>
        </div>
    );
};

export default GuidelinesForMarketingPromotions;
