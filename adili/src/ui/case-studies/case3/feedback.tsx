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
			Acceptance of Unwelcomed Gifts
		</p>
		<p className={`${paragraph} mb-8`}>
			KQ requires that all employees receive a gift of <strong>$50</strong>, equivalent of  
			<strong> KES 5,000.</strong> Gifts of promotional items of nominal value are also accepted.
		</p>
		<p className={`${paragraph} mb-8`}>
			Before an employee accept an invitation to an event, it is always important to 
			ensure that participation has clear business purpose.
		</p>
		<p className={`${paragraph} mb-8`}>
			Kenya Airways PLC should always meet an employee&apos;s travel and accommodation expenses.
		</p>
		<p className={`${paragraph} mb-16`}>
			Employees must be open with their superior on everything relating to the acceptance of gifts, 
			hospitality and so forth.
		</p>
		<CloseButton onClose={onClose} />
	</AnimateAnswer>
);

export default Feedback;
