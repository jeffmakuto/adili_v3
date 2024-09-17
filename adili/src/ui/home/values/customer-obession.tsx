import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'
import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph, buttonWrapper } from '@/styles/values'

const subLink: SubNavLink = {
  href: '/home/customer-obsession',
  label: 'Our Mission',
};

const CustomerObsession: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/customer obsession.jpg" alt="Customer Obsession" />
      <h3 className={heading}>Customer Obsession</h3>
      <p className={paragraph}>
        I commit to creating positive memorable experiences for our customers.
      </p>
      <div className={buttonWrapper}>
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default CustomerObsession;
