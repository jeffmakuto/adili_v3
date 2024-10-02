import ChatBox from '@/ui/adili/chat-box'
import Sidebar from '@/ui/adili/side-bar'

const AdiliChat: React.FC = () => {
  return (
    <main className="flex flex-col h-screen px-4 md:px-20 mb-4 md:mb-20 mt-8">
      {/* Grid layout: 60% ChatBox and 40% Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 flex-grow h-full">
        {/* ChatBox container */}
        <div className="shadow-lg">
          <ChatBox />
        </div>
        {/* Sidebar container */}
        <div className="h-full flex flex-col space-y-4 overflow-y-auto">
          <div className="flex-grow">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdiliChat;
