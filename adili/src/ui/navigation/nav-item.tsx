import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { TriangleDownIcon } from '@/ui/header/chevron-icons'
import { NavItemProps } from '@/types/link'
import { getItemClass, getIconClass, getLinkClass, getDropdownClass, getSubNavLinkClass } from '@/styles/nav-item-styles'
import useNavItem from '@/hooks/use-nav-item'

const NavItem: React.FC<NavItemProps & { closeMenu: () => void }> = ({
  href,
  label,
  icon,
  isActive,
  onClick,
  subNavLinks,
  closeMenu,
}) => {
  const { isOpen, handleMouseEnter, handleMouseLeave, handleClick } = useNavItem({ subNavLinks, onClick });

  const handleSubNavLinkClick = () => {
    closeMenu();
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} passHref>
        <div onClick={handleClick} className={getItemClass(isActive)}>
          <span className={`${isActive ? 'bg-white' : 'bg-gray-200'} p-2 rounded-full`}>
            <FontAwesomeIcon icon={icon as IconDefinition | IconProp} className={getIconClass(isActive)} />
          </span>
          <span className={`flex-grow ${getLinkClass(isActive)}`}>
            {label}
          </span>
          {subNavLinks && (
            <TriangleDownIcon className="w-4 h-4" isActive={isActive} />
          )}
        </div>
      </Link>
      {subNavLinks && isOpen && (
        <div className={getDropdownClass()}>
          {subNavLinks.map(subLink => (
            <Link key={subLink.href} href={subLink.href} passHref>
              <div className={getSubNavLinkClass()} onClick={handleSubNavLinkClick}>
                {subLink.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
