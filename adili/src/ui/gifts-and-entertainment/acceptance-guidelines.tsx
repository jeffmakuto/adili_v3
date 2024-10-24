import { heading, paragraph } from '@/styles/values'

const AcceptanceGuidelines: React.FC = () => {
    return (
        <>
            <h2 className={heading}>Acceptance Guidelines</h2>
            <ul className={`list-disc list-inside mb-4 pl-4 ${paragraph}`}>
                <li>We do not accept gifts, meals, entertainment, or any other favor if doing so might compromise, or appear to compromise, our ability to be objective and act ethically.</li>
                <li>We do not accept gifts of cash or cash equivalents, such as gift cards, gift certificates, gift vouchers, loans, stock, or stock options.</li>
                <li>Gifts and entertainment should be of a modest value and in line with reasonable business practices.</li>
                <li>We do not request gifts and entertainment from a customer, supplier, or business partner.</li>
            </ul>
        </>
    );
};

export default AcceptanceGuidelines;
