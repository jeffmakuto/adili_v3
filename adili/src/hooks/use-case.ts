import { useState } from 'react'

/**
 * useCase - Custom hook to handle user choices and feedback.
 * 
 * @returns Object containing choice and modal functionality.
 */
const useCase = () => {
	const [choice, setChoice] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);

	const handleChoice = (selectedChoice: string) => {
		if (selectedChoice === 'correct') {
			setChoice('correct');
		} else {
			setShowModal(true);
		}
	};

	const closeModal = () => setShowModal(false);
	const closeFeedback = () => setChoice(null);

	return {
		choice,
		showModal,
		handleChoice,
		closeModal,
		closeFeedback,
	};
};

export default useCase;
