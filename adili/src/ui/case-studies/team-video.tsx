import VideoPlayer from '@/ui/general/video-player'

/**
 * TeamVideo Component - Displays the Team Video.
 * 
 * @returns JSX.Element
 */
const TeamVideo: React.FC = () => {
  const videoUrl = '/api/case-studies/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default TeamVideo;
