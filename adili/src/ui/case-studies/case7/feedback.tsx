import { heading, paragraph } from '@/styles/values'
import CloseButton from '@/ui/buttons/close'
import { AnimateAnswer } from '@/ui/case-studies/animation'

const Feedback: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <AnimateAnswer>
    <h2
      className="text-3xl font-semibold mb-16"
      style={{ color: '#009639' }} /* PANTONE 354 C */
    >
      Correct Choice
    </h2>
    <p className={`${heading} lg:mb-8`}>
      Compromising Safety for Personal Interest
    </p>
    <p className={`${paragraph} mb-24`}>
      Fraud within the company impacts us directly as our employment and progress 
      in the company depends on its success. We should promptly report any violation 
      of the code or misconduct or any other illegal act. All ethical concerns reported 
      in good faith will be handled confidentially and investigated. The company offers 
      an anonymous ethics hotline as a commitment to protecting whistleblowers.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
