import { useOnlineStatus } from '@/hooks/use-online-status'
import { heading } from '@/styles/values'

const Header: React.FC = () => {
  const isOnline = useOnlineStatus();

  return (
    <header className="flex items-center justify-between px-10 bg-gray-100 text-gray-800 rounded-t-md shadow-md">
      <div className={heading}>Adili</div>
      <div className={heading}>{isOnline ? 'Online' : 'Offline'}</div>
    </header>
  );
};

export default Header;
