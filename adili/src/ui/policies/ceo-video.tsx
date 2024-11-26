import VideoPlayer from '@/ui/general/video-player'

/**
 * CEOVideo Component - Displays the CEO Video.
 * 
 * @returns JSX.Element
 */
const CEOVideo: React.FC = () => {
  const videoUrl = '/api/policies/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default CEOVideo;
