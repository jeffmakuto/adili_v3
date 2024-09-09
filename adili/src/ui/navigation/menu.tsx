'use client'

import { usePathname } from 'next/navigation'
import NavItem from '@/ui/navigation/nav-item'
import { MenuProps } from '@/types/link'

const Menu: React.FC<MenuProps> = ({ links }) => {
  const asPath = usePathname();

  return (
    <nav>
      <div className="hidden md:flex gap-4 items-center overflow-x-auto whitespace-nowrap mx-4">
        {links.map(link => (
          <NavItem
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            isActive={asPath === link.href}
          />
        ))}
      </div>
    </nav>
  );
};

export default Menu;
