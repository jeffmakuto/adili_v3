import { useEffect } from 'react'

const useMobileMenu = (menuOpen: boolean, toggleMenu: () => void) => {
  useEffect(() => {
    // Handle resize events
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (menuOpen) {
          toggleMenu(); // Close the menu if it's open
        }
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
      }
    };

    // Handle Escape key events
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        toggleMenu();
      }
    };

    // Initial setup
    handleResize(); // Run resize handler initially

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleEscape);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto'; // Ensure overflow style is reset
    };
  }, [menuOpen, toggleMenu]);
};

export default useMobileMenu;
