import FloatingCard from '@/ui/general/floating-card'
import MissionSection from '@/ui/home/mission/mission-section'

/**
 * MissionCard Component - Displays the Mission Card.
 * 
 * @param onClose - Function to close the Mission Card.
 * @returns JSX.Element
 */
const MissionCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <FloatingCard onClose={onClose}>
      <MissionSection />
    </FloatingCard>
  );
};

export default MissionCard;
