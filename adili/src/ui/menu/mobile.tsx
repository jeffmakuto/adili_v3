'use client'

import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MenuItem from '@/ui/menu/items'
import { MobileMenuProps } from '@/types/menu'

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, toggleMenu, links }) => {
  const pathname = usePathname();

  if (!menuOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[75vh] bg-gray-100 text-black shadow-lg z-50 overflow-y-auto">
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-black z-60 p-2"
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
      </button>
      <div className="flex flex-col h-full p-4 pt-16">
        <div className="flex flex-col flex-grow space-y-2">
          {links.map(item => (
            <MenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
              onClick={toggleMenu}
            />
          ))}
        </div>
        <div className="flex-grow"></div> {/* Occupies the remaining space */}
      </div>
    </div>
  );
};

export default MobileMenu;
