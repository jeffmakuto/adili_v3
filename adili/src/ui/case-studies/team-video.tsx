import VideoPlayer from '@/ui/general/video-player'

const TeamVideo: React.FC = () => {
  const videoUrl = '/api/case-studies/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default TeamVideo;
