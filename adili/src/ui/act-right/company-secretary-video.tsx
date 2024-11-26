import VideoPlayer from '@/ui/general/video-player'

/**
 * CompanySecretaryVideo Component
 * 
 * A functional React component responsible for rendering a video player
 * that displays a video related to the "Company Secretary & Director Legal and Compliance" role.
 * This component acts as a wrapper around the `VideoPlayer` component and provides the video URL.
 * 
 * @returns JSX.Element
 */
const CompanySecretaryVideo: React.FC = () => {
  /* URL for the video to be played */
  const videoUrl = '/api/act-right/';

  return (
    /* Embedding the VideoPlayer component with the specified video URL */
    <VideoPlayer videoUrl={videoUrl} />
  );
};

export default CompanySecretaryVideo;
