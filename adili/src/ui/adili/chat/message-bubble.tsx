import { format } from 'date-fns'
import { MessageBubbleProps } from '@/types/chat'
import { paragraph } from '@/styles/values'

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender, timestamp }) => {
  const isUser = sender === 'user';
  const bubbleStyle = isUser ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800';
  const alignStyle = isUser ? 'justify-end' : 'justify-start';
  const animation = 'animate-slideIn';

  return (
    <div className={`flex w-full ${alignStyle} transition-all ${animation} my-2`}>
      <div className={`p-3 rounded-2xl shadow-lg ${bubbleStyle} max-w-[50%] break-words ${paragraph}`}>
        {text}
      </div>
      <span className="text-xs text-gray-400 mt-1 ml-2">
        {format(new Date(timestamp), 'HH:mm')}
      </span>
    </div>
  );
};

export default MessageBubble;
