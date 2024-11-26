import { useState } from 'react'
import { UseNavItemProps } from '@/types/link'

/**
 * useNavItem - Custom hook to handle navigation item logic.
 * 
 * @param subNavLinks - Sub-navigation links.
 * @param onClick - Function to run on click.
 * @returns Object containing navigation item functionality.
 */
const useNavItem = ({ subNavLinks, onClick }: UseNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (subNavLinks) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (subNavLinks) setIsOpen(false);
  };

  const handleClick = () => {
    if (subNavLinks) setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return { isOpen, handleMouseEnter, handleMouseLeave, handleClick };
};

export default useNavItem;
