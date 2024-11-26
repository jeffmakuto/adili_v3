import { useCallback } from 'react'
import { UseSendOnEnterProps } from '@/types/send'

/**
 * useSendOnEnter - Custom hook to send message on Enter.
 * 
 * @param onSend - Function to run on Enter.
 * @returns Object containing onKeyDown handler.
 */
const useSendOnEnter = ({ onSend }: UseSendOnEnterProps) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSend();
      }
    },
    [onSend]
  );

  return { handleKeyDown };
};

export default useSendOnEnter;
