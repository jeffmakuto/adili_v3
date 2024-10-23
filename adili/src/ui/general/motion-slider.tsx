import { motion } from 'framer-motion'
import { MotionSliderProps } from '@/types/slider'

const MotionSlider: React.FC<MotionSliderProps> = ({ currentIndex, direction, children }) => {
  return (
    <motion.div
      initial={{ x: direction === 'right' ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === 'right' ? -100 : 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      key={currentIndex}
    >
      {children}
    </motion.div>
  );
};

export default MotionSlider;
