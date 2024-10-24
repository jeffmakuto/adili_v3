import { useState } from 'react'
import { UseNavItemProps } from '@/types/link'

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
