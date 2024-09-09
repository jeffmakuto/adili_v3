import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type LinkType = {
    href: string;
    label: string;
    icon?: IconDefinition;
    isActive: boolean;
  };

export type MenuProps = {
    links: LinkType[];
  };

export type NavItemProps = LinkType & {
  onClick?: () => void;
};  
  