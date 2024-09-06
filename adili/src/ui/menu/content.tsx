import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MenuItem from '@/ui/menu/items'
import { MenuContentProps } from '@/types/menu'

const MenuContent: React.FC<MenuContentProps> = ({ toggleMenu, links, menuOpen }) => {
  const pathname = usePathname();

  return (
    <div
      className="fixed top-0 left-0 w-3/5 h-3/4 bg-gray-100 text-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
      style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-black z-60 p-2"
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
      </button>
      <div className="flex flex-col h-5/6 p-4 pt-16">
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
      </div>
    </div>
  );
};

export default MenuContent;
