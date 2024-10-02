import SendButton from '@/ui/buttons/send-button'
import useAutoResizeTextArea from '@/hooks/input-field'

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onSend }) => {
  const textAreaRef = useAutoResizeTextArea(value);

  return (
    <div className="p-4 border-t border-gray-300 flex items-center space-x-4">
      <textarea
        ref={textAreaRef}
        className="flex-1 p-2 border border-gray-300 rounded-md resize-none overflow-y-auto"
        placeholder="Message Adili Chat"
        value={value}
        onChange={onChange}
        style={{ maxHeight: '100px' }}
      />
      <SendButton onClick={onSend} />
    </div>
  );
};

export default InputField;
