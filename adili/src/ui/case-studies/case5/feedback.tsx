import { heading, paragraph } from '@/styles/values'
import CloseButton from '@/ui/buttons/close'
import { AnimateAnswer } from '@/ui/case-studies/animation'

/**
 * Feedback Component - Displays feedback when the user makes the correct choice. 
 * It provides an explanation of the correct action and includes a close button.
 * 
 * @param {Function} onClose - Function to close the feedback.
 * 
 * @returns JSX.Element
 */
const Feedback: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <AnimateAnswer>
    <h2
      className="text-3xl font-semibold mb-16"
      style={{ color: '#009639' }} /* PANTONE 354 C */
    >
      Correct Choice
    </h2>
    <p className={`${heading} lg:mb-8`}>
      Conflict of Interest in Recruitment Process
    </p>
    <p className={`${paragraph} mb-24`}>
      All Actual, perceived or potential conflicts on interests need to be disclosed 
      as soon as one becomes aware of them so that they are managed and mitigated effectively.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
