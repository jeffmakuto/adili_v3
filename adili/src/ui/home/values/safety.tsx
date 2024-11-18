import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph } from '@/styles/values'

const Safety: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/safety.png" alt="Safety" />
      <h3 className={heading}>Safety</h3>
      <p className={paragraph}>Safety is the foundation of everything we do.</p>
    </div>
  );
};

export default Safety;
