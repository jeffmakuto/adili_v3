import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph } from '@/styles/values'

/**
 * Integrity Component - Displays integrity information.
 * 
 * @returns JSX.Element
 */
const Integrity: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/integrity.jpg" alt="Integrity" />
      <h3 className={heading}>Integrity</h3>
      <p className={paragraph}>
        I shall be ethical and trustworthy in all my engagements and treat each person with respect.
      </p>
    </div>
  );
};

export default Integrity;
