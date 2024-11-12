import { useEffect, useState } from 'react'
import { Message } from '@/types/chat'

/* Custom hook to handle messages, input logic */
export function useChat() {
  /* Start with an empty array to show default content initially */
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  /* Handle sending a message */
  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user', timestamp: new Date() }]);
      setInputValue('');
    }
  };

  /* Handle input change */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return {
    messages,
    inputValue,
    handleSend,
    handleInputChange,
  };
}

export function useChatToggle() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prevState => !prevState);
  };

  useEffect(() => {
    /* Disable scrolling when chat is open */
    if (isChatOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    /* Clean up the class on unmount */
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isChatOpen]);

  return { isChatOpen, toggleChat };
}
