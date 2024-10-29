import VideoPlayer from '@/ui/general/video-player'

const CompanySecretaryVideo: React.FC = () => {
  const videoUrl = '/api/act-right/';

  return (
      <VideoPlayer videoUrl={videoUrl} />
  );
};

export default CompanySecretaryVideo;
