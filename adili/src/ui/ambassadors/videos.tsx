import { AmbassadorVideoProps } from '@/types/policies'
import { useVideo } from '@/hooks/video-carousel'

const Video: React.FC<AmbassadorVideoProps & { isActive: boolean }> = ({ className, videoSrc, isActive }) => {
  const videoRef = useVideo(isActive);

  return (
    <video ref={videoRef} className={className} controls preload="none" muted>
      <source src={videoSrc} type="video/mp4" />
      <track
        src={`${videoSrc.replace('.mp4', '.vtt')}`}
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
