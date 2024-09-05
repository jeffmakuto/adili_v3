import NavList from '@/ui/navigation/nav-list'
import { NavProps } from '@/types/link'

const DesktopMenu: React.FC<NavProps> = ({ links }) => (
  <div className="hidden lg:block">
    <NavList links={links} />
  </div>
);

export default DesktopMenu;
