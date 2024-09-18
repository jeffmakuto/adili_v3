'use client'

import NavItem from '@/ui/navigation/nav-item'
import useMobileMenu from '@/hooks/use-mobile-menu'
import { MenuProps } from '@/types/link'
import { usePathname } from 'next/navigation'
import MenuToggleButton from '@/ui/navigation/menu-toggle-button'
import QRCode from '@/ui/codes/qr-code'

const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  const { isOpen, toggleMenu, closeMenu, setIsSubMenuOpen, menuRef } = useMobileMenu();
  const asPath = usePathname();

  return (
    <>
      <MenuToggleButton onClick={toggleMenu} isOpen={isOpen} />
      {isOpen && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black opacity-50"
          />
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-3/5 h-full bg-white shadow-lg z-50 transition-transform transform duration-300 ease-in-out"
            style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
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
                      // Open the sub-menu if there are sub-nav links
                      if (link.subNavLinks) {
                        setIsSubMenuOpen(true);
                      } else {
                        closeMenu(); // Close the menu if no sub-nav links
                      }
                    }}
                    subNavLinks={link.subNavLinks}
                  />
                ))}
              </div>
              <div className="flex justify-center mb-4">
                <QRCode />
              </div>
              <p className="text-center text-sm text-gray-700">
                  Scan the QR code above to report any issue
                  confidentially and anonymously
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
