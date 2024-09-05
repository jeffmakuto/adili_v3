import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { MenuItemProps } from '@/types/menu'

const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon = faHome, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative flex items-center px-4 py-3 text-lg transition-colors duration-300
      ${isActive ? 'bg-red-600 text-white border border-red-600' : 'text-gray-700 hover:bg-red-600 hover:text-white'}
      rounded-md flex-grow`}
  >
    <span
      className={`flex items-center justify-center w-8 h-8 border border-black rounded-full mr-3
        ${isActive ? 'bg-white' : 'bg-gray-200'} flex-shrink-0`}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className={`text-lg ${isActive ? 'text-red-600' : 'text-gray-700'} flex-shrink-0`} 
      />
    </span>
    {label}
  </a>
);

export default MenuItem;
