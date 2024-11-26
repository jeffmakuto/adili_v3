'use client'

import { AnimatePresence } from 'framer-motion'
import Feedback from '@/ui/case-studies/case1/feedback'
import Scenario from '@/ui/case-studies/case1/scenario'
import WrongChoiceModal from '@/ui/case-studies/wrong-choice'
import useCase from '@/hooks/use-case'

/**
 * Case1 Component - Displays a scenario and feedback based on the user's choice. 
 * Shows a modal when the user makes the wrong choice.
 * 
 * @returns JSX.Element
 */
const Case1: React.FC = () => {
	const {
		choice,          /* The user's current choice ('correct' or 'wrong') */
		showModal,       /* Flag to control the visibility of the wrong choice modal */
		handleChoice,    /* Function to handle user choice */
		closeModal,      /* Function to close the modal */
		closeFeedback,   /* Function to close the feedback */
	} = useCase(); /* Custom hook for managing state and actions */

	return (
		<div className="flex items-center justify-center">
			<AnimatePresence mode="wait">
				{choice === 'correct' ? (
					<Feedback key="feedback" onClose={closeFeedback} />  /* Show feedback if correct choice */
				) : (
					<Scenario key="scenario" handleChoice={handleChoice} />  /* Show scenario if wrong choice */
				)}
			</AnimatePresence>
			{showModal && <WrongChoiceModal onClose={closeModal} />}  {/* Show modal if the choice is wrong */}
		</div>
	);
};

export default Case1;
