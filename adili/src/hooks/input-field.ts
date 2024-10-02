import { useEffect, useRef } from 'react'

const useAutoResizeTextArea = (value: string) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; /* Reset height */
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; /* Set height based on content */
    }
  }, [value]);

  return textAreaRef;
};

export default useAutoResizeTextArea;
