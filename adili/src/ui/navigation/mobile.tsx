'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavItem from '@/ui/navigation/nav-item';
import useMobileMenu from '@/hooks/use-mobile-menu';
import { MenuProps } from '@/types/link';
import { usePathname } from 'next/navigation';

const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  const { isOpen, toggleMenu, closeMenu, menuRef } = useMobileMenu();
  const asPath = usePathname();

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`mx-4 md:hidden ${isOpen ? 'hidden' : 'block'}`}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      {isOpen && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black opacity-50"
          />
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-3/5 h-full bg-white shadow-lg z-50"
          >
            <div className="px-4 py-16">
              {links.map(link => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  isActive={asPath === link.href}
                  onClick={closeMenu}
                  subNavLinks={link.subNavLinks}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
