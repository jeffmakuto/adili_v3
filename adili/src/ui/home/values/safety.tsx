import { SubNavLink } from '@/types/link'
import ValuesImage from '@/ui/home/values/values-image'
import LearnMoreButton from '@/ui/buttons/learn-more'
import { container, heading, paragraph, buttonWrapper } from '@/styles/values'

const subLink: SubNavLink = {
  href: '/home/mission',
  label: 'Our Mission',
};

const Safety: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/safety.jpg" alt="Safety" />
      <h3 className={heading}>Safety</h3>
      <p className={paragraph}>Safety is the foundation of everything we do.</p>
      <div className={buttonWrapper}>
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Safety;
