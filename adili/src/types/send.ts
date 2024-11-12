export type SendButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export type UseSendOnEnterProps = {
  onSend: () => void;
}

export type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  isLoading: boolean;
}

export type LoadingDotsProps = {
  showTyping?: boolean;
}
