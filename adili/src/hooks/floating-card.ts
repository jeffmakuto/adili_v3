import { useEffect, useState, RefObject } from 'react'

/**
 * Custom hook to manage the state and behavior of a floating card.
 * @param onClose Callback function to call when the card is closed.
 * @returns An object containing isOpen state and handleClose function.
 */
const useFloatingCard = (onClose: () => void) => {
  const [isOpen, setIsOpen] = useState(true); /* Card is open on mount */

  useEffect(() => {
    /* Disable body scroll when the card is open */
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    /* Cleanup to reset body overflow when unmounted */
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  /* Close the card and invoke the onClose callback */
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return { isOpen, handleClose };
};

/**
 * Custom hook to detect clicks outside a specified element.
 * @param ref Reference to the element to monitor for outside clicks.
 * @param callback Callback function to call when an outside click is detected.
 */
const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      /* Invoke callback if click is outside the referenced element */
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    /* Cleanup event listener on unmount */
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export { useFloatingCard, useClickOutside };
