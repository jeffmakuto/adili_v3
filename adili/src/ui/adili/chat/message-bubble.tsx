import { format } from 'date-fns'
import { MessageBubbleProps } from '@/types/chat'
import { paragraph } from '@/styles/values'

/**
 * MessageBubble Component
 * 
 * This functional React component renders a chat message bubble, styled based on 
 * whether the sender is the user or the system/assistant.
 * 
 * @param {Object} props - Props passed to the component.
 * @param {string} props.text - The message text to display inside the bubble.
 * @param {string} props.sender - Indicates the sender of the message ('user' or other values).
 * @param {string | number | Date} props.timestamp - Timestamp of the message, displayed in HH:mm format.
 * 
 * @returns JSX.Element
 */
const MessageBubble: React.FC<MessageBubbleProps> = ({ text, sender, timestamp }) => {
  /* Determine styles and alignment based on the sender */
  const isUser = sender === 'user';
  const bubbleStyle = isUser ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800';
  const alignStyle = isUser ? 'justify-end' : 'justify-start';
  const animation = 'animate-slideIn'; /* Animation class for visual entry */

  return (
    <div className={`flex w-full ${alignStyle} transition-all ${animation} my-2`}>
      {/* Message bubble */}
      <div className={`p-3 rounded-2xl shadow-lg ${bubbleStyle} max-w-[75%] break-words ${paragraph}`}>
        {text}
      </div>

      {/* Timestamp */}
      <span className="text-xs text-gray-400 mt-1 ml-2">
        {format(new Date(timestamp), 'HH:mm')}
      </span>
    </div>
  );
};

export default MessageBubble;
