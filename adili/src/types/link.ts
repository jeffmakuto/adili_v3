import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type SubNavLink = {
  href: string;
  label: string;
};

export type LinkType = {
  href: string;
  label: string;
  icon?: IconDefinition;
  isActive: boolean;
  subNavLinks?: SubNavLink[];
};

export type MenuProps = {
  links: LinkType[];
};

export type NavItemProps = LinkType & {
  onClick?: () => void;
};

export type UseNavItemProps = {
  subNavLinks?: { href: string; label: string }[];
  onClick?: () => void;
}

export type MenuToggleButtonProps = {
  onClick: () => void;
  isOpen: boolean;
}

export type AnimateMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
  className: string;
  children: React.ReactNode;
}