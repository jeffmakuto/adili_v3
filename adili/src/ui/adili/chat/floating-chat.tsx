'use client'

import { useState } from 'react'
import { FaComments, FaTimes } from 'react-icons/fa'
import ChatBox from '@/ui/adili/chat-box'

const FloatingChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!isChatOpen && (
        <div
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg p-4 cursor-pointer"
          onClick={toggleChat}
        >
          <FaComments size={24} />
        </div>
      )}

      {/* Full-Page Chat Window */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg flex flex-col">
          {/* Chat Header with Close Button */}
          <div className="flex items-center justify-between p-4">
            <button
              onClick={toggleChat}
              className="p-2 rounded-full bg-red-600 transition"
            >
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
