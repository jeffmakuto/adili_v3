import VideoPlayer from '@/ui/general/video-player'

const ExplainerVideo: React.FC = () => {
  const videoUrl = '/api/adili/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default ExplainerVideo;
