import { paragraph } from '@/styles/values'

/**
 * NoPolicies Component - Displays a message when there are no policies available.
 * 
 * @returns JSX.Element
 */
const NoPolicies: React.FC = () => (
    <p className={`${paragraph} text-center`}>
      No policies available.
    </p>
  );
  
  export default NoPolicies;
  