import { useRef, useEffect, useState } from 'react'

/**
 * useVideo - Custom hook for managing video playback.
 * 
 * @param isActive - Flag to indicate if the video is active.
 * @returns Reference to the video element.
 */
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

/**
 * useCarousel - Custom hook for managing a carousel.
 * 
 * @param itemCount - Number of items in the carousel.
 * @returns Object containing carousel functionality.
 */
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
