import SendButton from '@/ui/buttons/send-button'
import useAutoResizeTextArea from '@/hooks/input-field'
import { InputFieldProps } from '@/types/send'
import useSendOnEnter from '@/hooks/use-send-on-enter'
import { paragraph } from '@/styles/values'

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onSend, isLoading }) => {
  const textAreaRef = useAutoResizeTextArea(value);
  const { handleKeyDown } = useSendOnEnter({ onSend });

  return (
    <div className="p-4 border-t border-gray-300 flex items-center space-x-4 bg-gray-200">
      <textarea
        ref={textAreaRef}
        className={`flex-1 p-2 border rounded-lg resize-none overflow-y-auto max-h-48 ${paragraph} ${
          isLoading ? 'opacity-50' : ''
        }`}
        placeholder="Message Adili"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <SendButton onClick={onSend} disabled={isLoading} />
    </div>
  );
};

export default InputField;
