'use client'

import { useState } from 'react'
import useChatBox from '@/hooks/api-chatbox'
import Header from '@/ui/adili/chat/header'
import MessageBubble from '@/ui/adili/chat/message-bubble'
import InputField from '@/ui/adili/chat/input-field'
import LoadingDots from '@/ui/adili/chat/loading'

const ChatBox: React.FC = () => {
  const { messages, inputValue, isLoading, messageEndRef, handleSend, handleInputChange } = useChatBox();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle fullscreen state
  const handleToggleFullscreen = () => {
    setIsFullscreen(prevState => !prevState);
  };

  return (
    <div 
      className={`flex flex-col h-full ${isFullscreen ? 'fixed top-0 left-0 right-0 bottom-0 bg-white' : ''}`}
      style={isFullscreen ? { overflow: 'hidden' } : {}}
    >
      {/* If fullscreen, dim the rest of the page */}
      {isFullscreen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 opacity-50 z-40"></div>
      )}
      
      <Header onToggleFullscreen={handleToggleFullscreen} isFullscreen={isFullscreen} />
      <div className="p-4 overflow-y-auto space-y-3 flex-grow">
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender} timestamp={msg.timestamp.getTime()} />
        ))}
        {isLoading && <LoadingDots />}
        <div ref={messageEndRef} />
      </div>
      <div className="z-50">
        <InputField value={inputValue} onChange={handleInputChange} onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatBox;
