'use client'

import { usePathname } from 'next/navigation'
import NavItem from '@/ui/navigation/nav-item'
import { MenuProps } from '@/types/link'

/**
 * Menu Component - Displays the Menu.
 * 
 * @param {MenuProps} { links }
 * @returns JSX.Element
 */
const Menu: React.FC<MenuProps> = ({ links }) => {
  const asPath = usePathname();

  return (
    <nav>
      <div className="hidden md:flex gap-4 items-center whitespace-nowrap">
        {links.map(link => (
          <NavItem
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            isActive={asPath === link.href}
            subNavLinks={link.subNavLinks}
            closeMenu={() => {}}
          />
        ))}
      </div>
    </nav>
  );
};

export default Menu;
