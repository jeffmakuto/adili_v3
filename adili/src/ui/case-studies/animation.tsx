import { motion } from 'framer-motion'
import { AnimateAnswerProps, AnimatedButtonProps, AnimateModalProps } from '@/types/cases'

const animateVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const backdropAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

const modalAnimation = {
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  transition: { duration: 0.3 },
};

export const AnimateAnswer: React.FC<AnimateAnswerProps> = ({ children }) => (
  <motion.div
    className="w-3/4 bg-white p-8 rounded-lg shadow-lg mt-10 text-center"
    initial={{ opacity: 0, x: '100%' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export const AnimateScenario: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={animateVariants.initial}
    animate={animateVariants.animate}
    transition={animateVariants.transition}
    className="w-full bg-white px-8"
  >
    {children}
  </motion.div>
);

export const AnimateButton: React.FC<AnimatedButtonProps> = ({ onClick, text }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-11/12 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-shadow shadow-md"
  >
    {text}
  </motion.button>
);

export const AnimateModal: React.FC<AnimateModalProps> = ({
  children,
  backdropClassName = '',
  modalClassName = '',
}) => (
  <motion.div
    className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${backdropClassName}`}
    {...backdropAnimation}
  >
    <motion.div
      className={`w-1/2 bg-white p-8 rounded-lg shadow-lg text-center mx-4 mt-10 ${modalClassName}`}
      {...modalAnimation}
    >
      {children}
    </motion.div>
  </motion.div>
);
