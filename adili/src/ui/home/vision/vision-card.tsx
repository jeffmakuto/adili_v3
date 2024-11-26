import FloatingCard from '@/ui/general/floating-card'
import VisionSection from '@/ui/home/vision/vision-section'

/**
 * VisionCard Component - Displays the Vision Card.
 * 
 * @param onClose - Function to close the Vision Card.
 * @returns JSX.Element
 */
const VisionCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <FloatingCard onClose={onClose}>
      <VisionSection />
    </FloatingCard>
  );
};

export default VisionCard;
