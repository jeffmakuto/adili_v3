import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'
import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph, buttonWrapper } from '@/styles/values'

const subLink: SubNavLink = {
  href: '/home/integrity',
  label: 'Our Mission',
};

const Integrity: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/integrity.jpg" alt="Integrity" />
      <h3 className={heading}>Integrity</h3>
      <p className={paragraph}>
        I shall be ethical and trustworthy in all my engagements and treat each person with respect.
      </p>
      <div className={buttonWrapper}>
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Integrity;
