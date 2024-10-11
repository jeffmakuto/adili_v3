export interface SendButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type UseSendOnEnterProps = {
  onSend: () => void;
}

export type InputFieldProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSend: () => void;
}