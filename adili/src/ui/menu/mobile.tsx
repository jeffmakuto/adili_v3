import Overlay from '@/ui/menu/overlay'
import MenuContent from '@/ui/menu/content'
import { MobileMenuProps } from '@/types/menu'
import useMobileMenu from '@/hooks/responsive-menu'

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, toggleMenu, links }) => {
  useMobileMenu(menuOpen, toggleMenu);

  if (!menuOpen) return null;

  return (
    <>
      <Overlay onClick={toggleMenu} />
      <MenuContent toggleMenu={toggleMenu} links={links} menuOpen={menuOpen} />
    </>
  );
};

export default MobileMenu;
