import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'
import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph, buttonWrapper } from '@/styles/values'

const subLink: SubNavLink = {
  href: '/home/accountability',
  label: 'Our Mission',
};

const Accountability: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/accountability.jpg" alt="Accountability" />
      <h3 className={heading}>Accountability</h3>
      <p className={paragraph}>
        I take initiative and responsibility for my actions, decisions, and results.
      </p>
      <div className={buttonWrapper}>
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Accountability;
