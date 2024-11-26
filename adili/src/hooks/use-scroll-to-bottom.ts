import { useEffect, RefObject } from 'react'

/**
 * useScrollToBottom - Custom hook to scroll to the bottom of the chat.
 * 
 * @param messages - Array of messages.
 * @param messageEndRef - Reference to the message element.
 */
const useScrollToBottom = (messages: any[], messageEndRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, messageEndRef]);
};

export default useScrollToBottom;
