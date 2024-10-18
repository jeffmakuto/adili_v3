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
      Accepting Hospitality from a Business partner in return for a favor
    </p>
    <p className={`${paragraph} mb-8`}>
      If a gift or entertainment you have been offered will influence your judgement 
      on a significant decision you have to make you must refrain from such a gift or 
      entertainment so that you are able to act in the best interest of the organization. 
      As we explain the company&apos;s stand against bribery and fraud we must do it in a 
      respectful manner.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
