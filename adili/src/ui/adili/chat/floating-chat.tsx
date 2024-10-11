'use client'

import { FaComments, FaTimes } from 'react-icons/fa'
import ChatBox from '@/ui/adili/chat-box'
import { useChatToggle } from '@/hooks/chat-box'

const FloatingChatButton: React.FC = () => {
  const { isChatOpen, toggleChat } = useChatToggle();

  return (
    <>
      {/* Floating Chat Icon */}
      {!isChatOpen && (
        <div
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg p-4 cursor-pointer"
          onClick={toggleChat}
        >
          <FaComments className="w-4 h-4 md:w-6 md:h-6" aria-label="Adili Chat Icon" />
          <span className="ml-2 text-white text-sm md:text-base lg:text-lg">Chat with Adili</span>
        </div>
      )}

      {/* Full-Page Chat Window */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg flex flex-col">
          {/* Chat Header with Close Button */}
          <div className="flex items-center justify-between p-4">
            <div className="flex-grow"></div>
            <button onClick={toggleChat} className="p-2 rounded-full bg-red-600 transition">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-grow">
            <ChatBox />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
