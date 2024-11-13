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
      Conflict of Interest in Insider Trading
    </p>
    <p className={`${paragraph} mb-8`}>
      <p>
        <strong>KQ Insider Information Policy Guideline</strong>
      </p>
      Employees and board of directors are prohibited by the law  to share inside 
      company information with others when the information is not yet made public.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
