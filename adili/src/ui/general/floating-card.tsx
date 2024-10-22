'use client'

import { useRef, ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import useClickOutside from '@/hooks/floating-card'

/* Shared animation variants */
const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

const contentVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/* Reusable FloatingCard Component */
const FloatingCard: React.FC<{
  onClose: () => void;
  children: ReactNode;
}> = ({ onClose, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  /* Close card if click detected outside of it */
  useClickOutside(cardRef, onClose);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        ref={cardRef}
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/5"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
