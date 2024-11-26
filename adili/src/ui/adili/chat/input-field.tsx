import SendButton from '@/ui/buttons/send-button'
import useAutoResizeTextArea from '@/hooks/input-field'
import { InputFieldProps } from '@/types/send'
import useSendOnEnter from '@/hooks/use-send-on-enter'
import { paragraph } from '@/styles/values'

/**
 * InputField Component
 *
 * This functional React component provides a user interface for inputting and sending text messages.
 * It includes an auto-resizing text area and a send button, making it ideal for chat interfaces.
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.value - The current value of the text area.
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} props.onChange - Function to handle text input changes.
 * @param {() => void} props.onSend - Function to handle sending the message.
 * @param {boolean} props.isLoading - Boolean indicating whether a message is being sent (disables input and button).
 *
 * @returns JSX.Element
 */
const InputField: React.FC<InputFieldProps> = ({ value, onChange, onSend, isLoading }) => {
  /* Custom hook to auto-resize the text area based on its content */
  const textAreaRef = useAutoResizeTextArea(value);

  /* Custom hook to handle sending messages on pressing Enter */
  const { handleKeyDown } = useSendOnEnter({ onSend });

  return (
    <div className="p-4 border-t border-gray-300 flex items-center space-x-4 bg-gray-200">
      {/* Text Area for Message Input */}
      <textarea
        ref={textAreaRef}
        className={`flex-1 p-2 border rounded-lg resize-none overflow-y-auto max-h-48 ${paragraph} ${
          isLoading ? 'opacity-50' : ''
        }`}
        placeholder="Message Adili" /* Placeholder text */
        value={value} /* Controlled input value */
        onChange={onChange} /* Callback for value change */
        onKeyDown={handleKeyDown} /* Send on Enter key */
        disabled={isLoading} /* Disable when loading */
      />
      {/* Send Button */}
      <SendButton onClick={onSend} disabled={isLoading} />
    </div>
  );
};

export default InputField;
