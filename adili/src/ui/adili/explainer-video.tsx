import VideoPlayer from '@/ui/general/video-player'

/**
 * ExplainerVideo Component
 * 
 * This component renders a video player to display an explainer video. The video URL is passed to the `VideoPlayer` component.
 * The video URL is dynamically defined and uses a base path `/api/adili/`, which can be expanded to include a specific video file name or ID.
 * 
 * @returns JSX.Element
 */
const ExplainerVideo: React.FC = () => {
  const videoUrl = '/api/adili/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default ExplainerVideo;
