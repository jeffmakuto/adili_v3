'use client'

import NavItem from '@/ui/navigation/nav-item'
import useMobileMenu from '@/hooks/use-mobile-menu'
import { MenuProps } from '@/types/link'
import { usePathname } from 'next/navigation'
import MenuToggleButton from '@/ui/navigation/menu-toggle-button'
import QRCode from '@/ui/codes/qr-code'
import styles from '@/styles/mobile-menu.module.css'
import AnimatedMenu from '@/ui/navigation/animate-menu'

const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  const { isOpen, toggleMenu, closeMenu, setIsSubMenuOpen, menuRef } = useMobileMenu();
  const asPath = usePathname();

  return (
    <>
      <MenuToggleButton onClick={toggleMenu} isOpen={isOpen} />
      <AnimatedMenu
        isOpen={isOpen}
        closeMenu={closeMenu}
        menuRef={menuRef}
        className={`${styles.menuContainer} ${isOpen ? styles.menuOpen : styles.menuClosed}`}
      >
        <div className="flex flex-col h-full px-4 py-6">
          <div className="flex-grow">
            {links.map(link => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                isActive={asPath === link.href}
                onClick={() => {
                  if (link.subNavLinks) {
                    setIsSubMenuOpen(true);
                  } else {
                    closeMenu();
                  }
                }}
                subNavLinks={link.subNavLinks}
                closeMenu={closeMenu}
              />
            ))}
          </div>
          <div className="flex justify-center mb-4">
            <QRCode width={100} height={100} />
          </div>
          <p className="text-left text-sm text-gray-700">
            Scan the QR code above to report any issue
            confidentially and anonymously
          </p>
        </div>
      </AnimatedMenu>
    </>
  );
};

export default MobileMenu;
