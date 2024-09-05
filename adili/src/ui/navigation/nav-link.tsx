import MenuItem from '@/ui/menu/items'
import { LinkType } from '@/types/link'

const NavLink: React.FC<LinkType> = ({ href, label, icon, isActive }) => (
  <li key={href} className="flex-shrink-0">
    <MenuItem
      href={href}
      label={label}
      icon={icon}
      isActive={isActive}
    />
  </li>
);

export default NavLink;
