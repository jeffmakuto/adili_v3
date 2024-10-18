'use client';

import { AnimatePresence } from 'framer-motion'
import Feedback from '@/ui/case-studies/case2/feedback'
import Scenario from '@/ui/case-studies/case2/scenario'
import WrongChoiceModal from '@/ui/case-studies/wrong-choice'
import useCase from '@/hooks/use-case'

const Case2: React.FC = () => {
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

export default Case2;
