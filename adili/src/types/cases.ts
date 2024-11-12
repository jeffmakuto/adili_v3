import { ReactNode } from 'react'

export type AnimateAnswerProps = {
    children: React.ReactNode;
}

export type ScenarioProps = {
    handleChoice: (choice: string) => void;
}

export type AnimatedButtonProps = {
    onClick: () => void;
    text: string;
    value: string;
}

export type AnimateModalProps = {
    children: ReactNode;
    backdropClassName?: string;
    modalClassName?: string;
}

export type CaseSelectorProps = {
    selectedCaseIndex: number
    setSelectedCaseIndex: (index: number) => void
}