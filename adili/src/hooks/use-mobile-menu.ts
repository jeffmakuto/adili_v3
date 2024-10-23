import { useState, useRef, useEffect, useCallback } from 'react';

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      setIsSubMenuOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    /* Disable scrolling when the menu is open */
    if (isOpen) {
      document.body.classList.add('overflow-hidden', 'h-screen');
    } else {
      document.body.classList.remove('overflow-hidden', 'h-screen');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('overflow-hidden', 'h-screen');
    };
  }, [closeMenu, isOpen]);

  return {
    isOpen,
    isSubMenuOpen,
    toggleMenu,
    closeMenu,
    setIsSubMenuOpen,
    menuRef,
  };
};

export default useMobileMenu;
