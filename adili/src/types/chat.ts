export type Message = {
    text: string;
    sender: string;
    timestamp: Date;
}

export type InputFieldProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSend: () => void;
}

export type MessageBubbleProps = {
    text: string;
    sender: string;
    timestamp: number;
}

export type HeaderProps = {
    status?: string;
}
  