import VideoPlayer from '@/ui/general/video-player'

const CEOVideo: React.FC = () => {
  const videoUrl = '/api/policies/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default CEOVideo;
