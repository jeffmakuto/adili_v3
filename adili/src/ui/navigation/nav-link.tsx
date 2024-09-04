import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { LinkType } from '@/types/link'

const NavLink: React.FC<LinkType> = ({ href, label, icon, isActive }) => (
  <li key={href} className="flex-shrink-0">
    <Link
      className={`relative flex items-center px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base transition-colors duration-300
        ${isActive ? 'bg-red-600 text-white border border-red-600' : 'text-gray-700 hover:bg-red-600 hover:text-white'}
        rounded-md group`}
      href={href}
      aria-current={isActive ? 'page' : undefined}
    >
      <span
        className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border border-black rounded-full mr-1 sm:mr-2
          ${isActive ? 'bg-white' : 'bg-gray-200'} flex-shrink-0`}
      >
        <FontAwesomeIcon 
          icon={icon || faHome} 
          className={`text-xs sm:text-sm md:text-base ${isActive ? 'text-red-600' : 'text-gray-700'} flex-shrink-0`} 
        />
      </span>
      {label}
    </Link>
  </li>
);

export default NavLink;
