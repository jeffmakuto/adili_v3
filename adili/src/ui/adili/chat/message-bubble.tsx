import { format } from 'date-fns'

interface MessageBubbleProps {
  text: string;
  sender: string;
  timestamp: number;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender, timestamp }) => {
  const bubbleStyle = sender === 'user' ? 'bg-red-600 text-white' : 'bg-gray-100 text-black';
  const alignStyle = sender === 'user' ? 'items-end' : 'items-start';

  return (
    <div className={`flex flex-col ${alignStyle}`}>
      <div className={`p-3 rounded-2xl shadow-md ${bubbleStyle} max-w-[70%] break-words`}>
        {text}
      </div>
      <span className="text-xs text-gray-400 mt-1">
        {format(new Date(timestamp), 'HH:mm')}
      </span>
    </div>
  );
};

export default MessageBubble;
