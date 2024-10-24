'use client';

import { useRef, useState, useEffect } from 'react';
import { useChat } from '@/hooks/chat-box';
import Header from '@/ui/adili/chat/header';
import MessageBubble from '@/ui/adili/chat/message-bubble';
import InputField from '@/ui/adili/chat/input-field';
import DefaultContent from '@/ui/adili/chat/default-content';
import LoadingDots from '@/ui/adili/chat/loading';

const ChatBox: React.FC = () => {
  const { messages, inputValue, handleInputChange } = useChat();
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [localMessages, setLocalMessages] = useState(messages);

  /* Automatically update localMessages when global messages change. */
  useEffect(() => {
    setLocalMessages(messages); /* Update local messages state */
  }, [messages]);

  /* Automatically scroll to the bottom of the chat when localMessages or isLoading state changes. */
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

  return (
    <div role="region" aria-label="Chat box" className="flex flex-col h-full rounded-lg shadow-lg bg-white overflow-hidden">
      <Header />
      <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[500px] max-h-[600px] bg-gray-50">
        {localMessages.length === 0 ? (
          <DefaultContent />
        ) : (
          localMessages.map((msg, index) => (
            <MessageBubble key={index} text={msg.text} sender={msg.sender} timestamp={msg.timestamp.getTime()} />
          ))
        )}

        {isLoading && <LoadingDots />}
        <div ref={messageEndRef} />
      </div>
      <InputField value={inputValue} onChange={handleInputChange} onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default ChatBox;
