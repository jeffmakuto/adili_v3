'use client'

import { useEffect, useRef } from 'react'
import { useChat } from '@/hooks/chat-box'
import Header from '@/ui/adili/chat/header'
import MessageBubble from '@/ui/adili/chat/message-bubble'
import InputField from '@/ui/adili/chat/input-field'
import DefaultContent from '@/ui/adili/chat/default-content'

const ChatBox: React.FC = () => {
  const { messages, inputValue, handleSend, handleInputChange } = useChat();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  /* Scroll to the bottom of the chat whenever new messages arrive */
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full rounded-lg shadow-md">
      <Header />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4 min-h-[500px] max-h-[600px]">
        {messages.length === 0 ? (
          <DefaultContent />
        ) : (
          messages.map((msg, index) => (
            <MessageBubble
              key={index}
              text={msg.text}
              sender={msg.sender}
              timestamp={msg.timestamp.getTime()}
            />
          ))
        )}
        {/* Reference div to scroll to the end */}
        <div ref={messageEndRef} />
      </div>
      <InputField value={inputValue} onChange={handleInputChange} onSend={handleSend} />
    </div>
  );
};

export default ChatBox;
