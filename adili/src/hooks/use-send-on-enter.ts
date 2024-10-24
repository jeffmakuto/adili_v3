import { useCallback } from 'react'
import { UseSendOnEnterProps } from '@/types/send'

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
