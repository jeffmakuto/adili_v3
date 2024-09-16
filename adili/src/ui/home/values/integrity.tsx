import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'
import ValuesImage from '@/ui/home/values/values-image'

const subLink: SubNavLink = {
  href: '/home/integrity',
  label: 'Our Mission',
};

const Integrity: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <ValuesImage src="/images/integrity.jpg" alt="Integrity" />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Integrity</h3>
      <p className="text-gray-600 mt-2">
        I shall be ethical and trustworthy in all my engagements and treat each person with respect.
      </p>
      <div className="flex">
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Integrity;
