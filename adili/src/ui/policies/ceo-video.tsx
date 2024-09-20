import { CEOVideoProps } from '@/types/policies'

const CEOVideo: React.FC<CEOVideoProps> = ({ className }) => {
  return (
    <video className={className} controls preload="none">
      <source src="/videos/Trial.mp4" type="video/mp4" />
      <track
        src="/videos/Trial.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}

export default CEOVideo;