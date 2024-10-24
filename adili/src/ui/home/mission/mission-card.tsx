import FloatingCard from '@/ui/general/floating-card'
import MissionSection from '@/ui/home/mission/mission-section'

const MissionCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <FloatingCard onClose={onClose}>
      <MissionSection />
    </FloatingCard>
  );
};

export default MissionCard;
