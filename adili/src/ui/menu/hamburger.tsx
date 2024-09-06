import { HamburgerMenuButtonProps } from '@/types/menu'

const HamburgerMenuButton: React.FC<HamburgerMenuButtonProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex items-center text-red-500 focus:outline-none p-2 lg:p-4"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
    >
      <svg
        className="w-6 h-6 lg:w-8 lg:h-8 mr-2"
        fill="none"
        stroke="red"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className="text-red-500 font-bold lg:text-lg">MENU</span>
    </button>
  );
};

export default HamburgerMenuButton;
