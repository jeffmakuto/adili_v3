import FloatingCard from '@/ui/general/floating-card'
import VisionSection from '@/ui/home/vision/vision-section'

const VisionCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <FloatingCard onClose={onClose}>
      <VisionSection />
    </FloatingCard>
  );
};

export default VisionCard;
