import { heading } from "@/styles/values";

interface HeaderProps {
  status?: string;
}

const Header: React.FC<HeaderProps> = ({ status = 'Online' }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 text-white rounded-t-md shadow-md">
      <div className={heading}>Adili Chat</div>
      <div className={heading}>{status}</div>
    </header>
  );
};

export default Header;