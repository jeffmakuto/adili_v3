import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type LinkType = {
    href: string;
    label: string;
    icon?: IconDefinition;
    isActive: boolean;
  };

export type NavProps = {
    links: LinkType[];
  };
  