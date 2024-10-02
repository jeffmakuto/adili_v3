'use client'

import { useChat } from '@/hooks/chat-box'
import Header from '@/ui/adili/chat/header'
import MessageBubble from '@/ui/adili/chat/message-bubble'
import InputField from '@/ui/adili/chat/input-field'
import DefaultContent from '@/ui/adili/chat/default-content'

const ChatBox: React.FC = () => {
  const { messages, inputValue, handleSend, handleInputChange } = useChat();

  return (
    <div className="flex flex-col h-full rounded-lg shadow-md">
      <Header />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
        {messages.length === 0 ? <DefaultContent /> : messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender} timestamp={msg.timestamp.getTime()} />
        ))}
      </div>
      <InputField value={inputValue} onChange={handleInputChange} onSend={handleSend} />
    </div>
  );
}

export default ChatBox;
