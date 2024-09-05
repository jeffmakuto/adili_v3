import NavList from '@/ui/navigation/nav-list'
import { NavProps } from '@/types/link'

const NavContainer: React.FC<NavProps> = ({ links }) => (
  <div className="p-4 bg-gray-100 mx-auto box-border">
    <nav aria-label="Main site navigation" role="navigation">
      <div className="overflow-x-auto">
        <NavList links={links} />
      </div>
    </nav>
  </div>
);

export default NavContainer;
