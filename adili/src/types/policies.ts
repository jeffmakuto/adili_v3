import { ChangeEvent } from 'react'

export type CEOVideoProps = {
    className?: string;
}

export type SearchBarProps = {
    searchTerm: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type PaginationControlsProps = {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
}

export type Policy = {
    id: string;  
    title: string;  
    icon: string;  
    description: string;  
    embedSrc: string;
  
}

export type PolicyAccordionProps = {
    policies: Policy[];
    expandedIndex: number | null;
    onToggle: (index: number) => void;
}  
  
export type PolicyItemProps = {
    policy: {
        id: string;
      title: string;
      icon: string;
      description: string;
      embedSrc: string;
    };
    isExpanded: boolean;
    index: number;
    onToggle: (index: number) => void;
}
  
export type HeroImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
}


export type DeclarationProps = {
    declarationLink: string;
}

export type DeclarationButtonProps = {
    link: string;
}