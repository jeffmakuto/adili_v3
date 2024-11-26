import { useEffect, useRef, useState } from 'react'

/**
 * useVideoFetch - Custom hook for fetching and playing a video.
 * 
 * @param url - URL of the video.
 * @returns Object containing video fetch functionality.
 */
const useVideoFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Range': 'bytes=0-', /* Request the entire video initially */
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        /* Convert the response into a Blob */
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        videoUrlRef.current = blobUrl;

        /* Set the video source */
        if (videoRef.current) {
          videoRef.current.src = blobUrl;
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();

    /* Cleanup function to revoke the object URL */
    return () => {
      if (videoUrlRef.current) {
        URL.revokeObjectURL(videoUrlRef.current);
      }
    };
  }, [url]);

  const handleVideoError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return { videoRef, isLoading, hasError, handleVideoError };
};

export default useVideoFetch;
