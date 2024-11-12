import { VideoControlsProps } from '@/types/videos'

const VideoControls: React.FC<VideoControlsProps> = ({ prevSlide, nextSlide }) => {
	return (
		<div className="flex justify-between mt-4">
			<button
				onClick={prevSlide}
				className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
			>
				Previous
			</button>
			<button
				onClick={nextSlide}
				className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
			>
				Next
			</button>
		</div>
	);
};

export default VideoControls;
