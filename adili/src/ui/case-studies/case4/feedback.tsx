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
      Receiving Inappropriate Gifts
    </p>
    <p className={`${paragraph} mb-24`}>
      Accepting gifts that exceeds reasonable value may compromise personal integrity. 
      It is crucial to politely decline inappropriate gifts and adhere to the ethical 
      standards of the organization.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
