import { AmbassadorVideoProps } from '@/types/policies'
import { useVideo } from '@/hooks/video-carousel'

/**
 * Video Component
 * 
 * The `Video` component renders an individual video player with support for controls,
 * subtitles, and lazy loading based on whether the video is active in the carousel.
 * It supports features like video controls (play, pause, mute), subtitles, and conditional rendering.
 * 
 * @param {string} className - Custom CSS class name for styling the video element.
 * @param {string} videoSrc - URL or path to the video source (e.g., '/videos/video1.mp4').
 * @param {boolean} isActive - Determines if the video is currently active in the carousel, influencing its playback behavior.
 * 
 * @returns JSX.Element
 */
const Video: React.FC<AmbassadorVideoProps & { isActive: boolean }> = ({ className, videoSrc, isActive }) => {
  const videoRef = useVideo(isActive); /* Hook to handle video behavior based on whether it's active or not. */

  return (
    <video ref={videoRef} className={className} controls preload="none" muted>
      <source src={videoSrc} type="video/mp4" />
      <track
        src={`${videoSrc.replace('.mp4', '.vtt')}`}  /* Assumes that subtitles are available as .vtt files. */
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
