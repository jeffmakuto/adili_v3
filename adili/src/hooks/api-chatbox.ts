import { useRef, useState, useEffect } from 'react'
import { useChat } from '@/hooks/chat-box'
import { Message } from '@/types/chat'

const useChatBox = () => {
  const { messages, inputValue, handleInputChange } = useChat();
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [localMessages, setLocalMessages] = useState<Message[]>(messages);

  useEffect(() => {
    setLocalMessages(messages);
  }, [messages]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [localMessages, isLoading]);

  const handleSend = async () => {
    if (!inputValue) return;

    addMessageToChat({ text: inputValue, sender: 'user' });
    clearInputField();
    setIsLoading(true);

    try {
      const response = await fetchBotResponse(inputValue);
      if (response?.reply) {
        addMessageToChat({ text: response.reply, sender: 'bot' });
      } else {
        addMessageToChat({ text: 'Sorry, I could not process that.', sender: 'bot' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      addMessageToChat({ text: 'An error occurred. Please try again.', sender: 'bot' });
    } finally {
      setIsLoading(false);
    }
  };

  const addMessageToChat = (message: { text: string; sender: string }) => {
    setLocalMessages((prevMessages) => [
      ...prevMessages,
      { ...message, timestamp: new Date() },
    ]);
  };

  const clearInputField = () => {
    handleInputChange({ target: { value: '' } } as React.ChangeEvent<HTMLTextAreaElement>);
  };

  const fetchBotResponse = async (userMessage: string) => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  };

  return {
    messages: localMessages,
    inputValue,
    isLoading,
    messageEndRef,
    handleSend,
    handleInputChange,
  };
};

export default useChatBox;
