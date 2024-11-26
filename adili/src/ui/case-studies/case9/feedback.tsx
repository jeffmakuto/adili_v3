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
      Reporting Misconduct
    </p>
    <p className={`${paragraph} mb-24`}>
      We should promptly report any actual or possible violation of the code or misconduct or 
      any other illegal act that is not in the interest of the company. All ethical concerns 
      reported in good faith are taken seriously, treated confidentially, and investigated. 
      The company offers an ethics hotline that allows you to report all ethical concerns 
      you have while keeping your identity secret.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
