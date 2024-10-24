'use client'

import { FaComments, FaMinusCircle } from 'react-icons/fa'
import ChatBox from '@/ui/adili/chat-box'
import { useChatToggle } from '@/hooks/chat-box'

const FloatingChatButton: React.FC = () => {
  const { isChatOpen, toggleChat } = useChatToggle();

  return (
    <>
      {!isChatOpen && (
        <div
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center 
          bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg 
          p-4 cursor-pointer animate-bounce"
          onClick={toggleChat}
        >
          <FaComments className="w-6 h-6" />
          <span className="ml-2 text-white text-sm md:text-base lg:text-lg">Chat with Adili</span>
        </div>
      )}

      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg flex flex-col animate-fadeIn">
          <div className="flex justify-end p-4">
            <button onClick={toggleChat} className="p-2 rounded-full bg-red-600 hover:bg-red-700">
              <FaMinusCircle size={20} />
            </button>
          </div>
          <div className="flex-grow">
            <ChatBox />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
