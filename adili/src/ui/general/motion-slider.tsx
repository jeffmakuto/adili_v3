import { motion } from 'framer-motion'
import { MotionSliderProps } from '@/types/slider'

/**
 * MotionSlider Component - Animate Slider Motion.
 * 
 * @param {MotionSliderProps} props - Current Index, Direction, Children
 * @returns JSX.Element
 */
const MotionSlider: React.FC<MotionSliderProps> = ({ currentIndex, direction, children }) => {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        initial={{ x: direction === 'right' ? '100%' : '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction === 'right' ? '-100%' : '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        key={currentIndex}
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionSlider;
