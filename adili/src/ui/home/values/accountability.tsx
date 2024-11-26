import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph } from '@/styles/values'

/**
 * Accountability Component - Displays accountability information.
 * 
 * @returns JSX.Element
 */
const Accountability: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/accountability.jpg" alt="Accountability" />
      <h3 className={heading}>Accountability</h3>
      <p className={paragraph}>
        I take initiative and responsibility for my actions, decisions, and results.
      </p>
    </div>
  );
};

export default Accountability;
