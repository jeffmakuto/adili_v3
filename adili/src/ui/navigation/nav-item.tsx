import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { NavItemProps } from '@/types/link'

const NavItem: React.FC<NavItemProps> = ({ href, label, icon, isActive, onClick }) => {
  const itemClass = `
    ${isActive ? 'bg-red-600 text-white border border-red-600' : 'text-gray-700 hover:bg-red-600 hover:text-white'}
    rounded-md cursor-pointer
    flex items-center space-x-3
    p-2
    text-base sm:text-base md:text-base lg:text-lg
  `;

  const iconClass = `
    ${isActive ? 'text-red-600' : 'text-gray-700'}
    flex-shrink-0
    text-base sm:text-base md:text-base lg:text-lg
  `;

  return (
    <Link href={href} passHref>
      <div onClick={onClick} className={itemClass}>
        <span className={`${isActive ? 'bg-white' : 'bg-gray-200'} p-2 rounded-full`}>
          <FontAwesomeIcon icon={icon as IconDefinition | IconProp} className={iconClass} />
        </span>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavItem;
