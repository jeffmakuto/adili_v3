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
      Accepting a gift/bribe in return for a favour
    </p>
    <p className={`${paragraph} mb-8`}>
      Giving and receiving of gifts and 
      entertainment is aimed at building business relationships and generating 
      goodwill and should never be used to improperly influence or obligate 
      the recipient to act in our favor or for something in return.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
