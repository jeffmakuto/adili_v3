import { LinkType } from './link'

export type HamburgerMenuButtonProps = {
    menuOpen: boolean;
    toggleMenu: () => void;
};

export type MobileMenuProps = {
    menuOpen: boolean;
    toggleMenu: () => void;
    links: LinkType[];
};

export type MenuItemProps = LinkType & {
    onClick?: () => void;
};
  