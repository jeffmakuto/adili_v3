'use client'

import { FaComments } from 'react-icons/fa'
import { useRef } from 'react'
import ChatBox from '@/ui/adili/chat-box'
import { useChatToggle } from '@/hooks/chat-box'
import { useClickOutside } from '@/hooks/floating-card'

const FloatingChatButton: React.FC = () => {
  const { isChatOpen, toggleChat } = useChatToggle();
  const chatBoxRef = useRef<HTMLDivElement>(null);

  /* Close the chat if clicked outside */
  useClickOutside(chatBoxRef, () => {
    if (isChatOpen) toggleChat();
  });

  return (
    <>
      {/* Chat Button */}
      <div
        className={`fixed bottom-4 right-4 z-50 flex items-center justify-center 
          ${!isChatOpen ? 'bg-red-600 hover:bg-red-700' : 'hidden'} 
          text-white rounded-full shadow-lg p-4 cursor-pointer animate-bounce`}
        onClick={toggleChat}
      >
        {!isChatOpen && (
          <>
            <FaComments className="w-6 h-6" />
            <span className="ml-2 text-white text-sm md:text-base lg:text-lg">Chat with Adili</span>
          </>
        )}
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div 
          ref={chatBoxRef} 
          className="fixed bottom-12 right-4 z-50 w-3/4 sm:w-3/4 md:w-96 lg:w-96 h-3/5 sm:h-3/4 md:h-3/4 lg:h-3/4 bg-white rounded-lg flex flex-col"
        >
          <ChatBox />
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
