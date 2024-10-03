import { SubNavLink } from '@/types/link'
import ChatBox from '@/ui/adili/chat-box'
import ReturnToMain from '@/ui/buttons/return-to-main'

const subLink: SubNavLink = {
    href: '/adili-chat',
    label: 'Adili',
};
  
const AdiliChat: React.FC = () => {
  return (
    <main className="flex flex-col mt-8">
      <div className="flex-grow px-16">
        <ChatBox />
      </div>
      <div className="mt-8 mb-4">
        <ReturnToMain subLink={subLink} />
      </div>
    </main>
  );
};

export default AdiliChat;
