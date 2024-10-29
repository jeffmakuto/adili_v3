'use client'

import LoadingSpinner from '@/ui/general/loading'
import useVideoFetch from '@/hooks/video-fetch'
import { VideoPlayerProps } from '@/types/general'

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, videoUrl }) => {
  const { videoRef, isLoading, hasError, handleVideoError } = useVideoFetch(videoUrl);

  return (
    <div className={`${className} video-container`} style={{ position: 'relative' }}>
      {isLoading && <LoadingSpinner />}
      {hasError && <div className="error-message" role="alert">Failed to load video. Please try again later.</div>}
      <video
        ref={videoRef}
        controls
        preload="none"
        muted
        autoPlay
        onError={handleVideoError}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <track
          src="/videos/Trial.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag. Please use a modern browser.
      </video>
    </div>
  );
};

export default VideoPlayer;
