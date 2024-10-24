import { useEffect, RefObject } from 'react'

const useScrollToBottom = (messages: any[], messageEndRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, messageEndRef]);
};

export default useScrollToBottom;
