'use client'

import { AnimatePresence } from 'framer-motion'
import Feedback from '@/ui/case-studies/case4/feedback'
import Scenario from '@/ui/case-studies/case4/scenario'
import WrongChoiceModal from '@/ui/case-studies/wrong-choice'
import useCase from '@/hooks/use-case'

/**
 * Case4 Component - Displays a scenario and feedback based on the user's choice. 
 * Shows a modal when the user makes the wrong choice.
 * 
 * @returns JSX.Element
 */
const Case4: React.FC = () => {
	const {
		choice,
		showModal,
		handleChoice,
		closeModal,
		closeFeedback,
	} = useCase();

	return (
		<div className="flex items-center justify-center">
			<AnimatePresence mode="wait">
				{choice === 'correct' ? (
					<Feedback key="feedback" onClose={closeFeedback} />
				) : (
					<Scenario key="scenario" handleChoice={handleChoice} />
				)}
			</AnimatePresence>
			{showModal && <WrongChoiceModal onClose={closeModal} />}
		</div>
	);
};

export default Case4;
