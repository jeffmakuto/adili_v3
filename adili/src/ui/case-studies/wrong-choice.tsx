import { paragraph } from '@/styles/values'
import CloseButton from '@/ui/buttons/close'
import { AnimateModal } from '@/ui/case-studies/animation'

/**
 * WrongChoiceModal Component - Displays a modal for incorrect choices.
 * 
 * @param {Function} onClose - Close Modal Function
 * @returns JSX.Element
 */
const WrongChoiceModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <AnimateModal>
    <p className={`${paragraph} mb-8`}>Incorrect. Try again</p>
    <CloseButton onClose={onClose} />
  </AnimateModal>
);

export default WrongChoiceModal;
