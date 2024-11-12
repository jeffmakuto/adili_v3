'use client'
import { MenuToggleButtonProps } from "@/types/link"

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ onClick, isOpen }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 text-white md:hidden ${isOpen ? 'hidden' : 'flex'}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="red"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    <span className="ml-2 font-black text-lg text-red-600">MENU</span>
  </button>
);

export default MenuToggleButton;
