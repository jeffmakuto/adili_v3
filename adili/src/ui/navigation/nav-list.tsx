import { usePathname } from 'next/navigation'
import NavLink from '@/ui/navigation/nav-link'
import { NavProps } from '@/types/link'

const NavList: React.FC<NavProps> = ({ links }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <ul className="flex flex-nowrap justify-center space-x-4 list-none min-w-max">
      {links.map(({ href, label, icon }) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          icon={icon}
          isActive={isActive(href)}
        />
      ))}
    </ul>
  );
};

export default NavList;
