import SendButton from '@/ui/buttons/send-button'
import useAutoResizeTextArea from '@/hooks/input-field'
import { InputFieldProps } from '@/types/send'
import useSendOnEnter from '@/hooks/use-send-on-enter'

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onSend }) => {
  const textAreaRef = useAutoResizeTextArea(value);
  const { handleKeyDown } = useSendOnEnter({ onSend });

  return (
    <div className="p-4 border-t border-gray-300 flex items-center space-x-4">
      <textarea
        ref={textAreaRef}
        className="flex-1 p-2 border border-gray-300 rounded-md resize-none overflow-y-auto"
        placeholder="Message Adili Chat"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        style={{ maxHeight: '100px' }}
      />
      <SendButton onClick={onSend} />
    </div>
  );
};

export default InputField;
