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
      Conflict of Interest in Procurement Process.
    </p>
    <p className={`${paragraph} mb-24`}>
      KQ has zero tolerance to fraud. All potential, actual and future Conflict of Interest 
      must be declared and managed effectively. No employee should misuse their positions to 
      influence decision making process. All staff are required to report any fraudulent 
      activities without undue delay.
    </p>
    <CloseButton onClose={onClose} />
  </AnimateAnswer>
);

export default Feedback;
