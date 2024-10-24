import { useRef, useEffect, useState } from 'react'

/* Hook for managing video playback */
const useVideo = (isActive: boolean) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		if (videoRef.current) {
			if (isActive) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	}, [isActive]);

	return videoRef;
};

/* Hook for managing a carousel */
const useCarousel = (itemCount: number) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? itemCount - 1 : prevIndex - 1
		);
	};

	return { currentIndex, handleNext, handlePrev, setCurrentIndex };
};

export { useVideo, useCarousel };
