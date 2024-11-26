import styles from '@/styles/loading-dots.module.css'

/**
 * LoadingDots Component
 * 
 * This functional React component renders an animated "loading dots" indicator.
 * It is ideal for showing loading or processing states in the UI.
 * 
 * @returns JSX.Element
 */
const LoadingDots: React.FC = () => {
  return (
    <div className={styles.dotsContainer}>
      {/* Individual dots */}
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

export default LoadingDots;
