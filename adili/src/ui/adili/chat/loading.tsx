import styles from '@/styles/loading-dots.module.css'

const LoadingDots: React.FC = () => {
  return (
    <div className={styles.dotsContainer}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

export default LoadingDots;
