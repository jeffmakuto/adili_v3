import { motion, AnimatePresence } from 'framer-motion'
import { AnimateMenuProps } from '@/types/link'

const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0, ease: [0.25, 0.1, 0.25, 1] } },
    closed: { opacity: 0, x: '-100%', transition: { duration: 0, ease: [0.25, 0.1, 0.25, 1] } },
};

const AnimatedMenu: React.FC<AnimateMenuProps> = ({
  isOpen,
  closeMenu,
  menuRef,
  className,
  children,
}) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          onClick={closeMenu}
          className="fixed inset-0 bg-black opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
        />
        <motion.div
          ref={menuRef}
          className={className}
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
        >
          {children}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default AnimatedMenu;

