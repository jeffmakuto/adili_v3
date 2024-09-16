import { SubNavLink } from '@/types/link'
import ValuesImage from '@/ui/home/values/values-image'
import LearnMoreButton from '@/ui/buttons/learn-more'

const subLink: SubNavLink = {
  href: '/home/mission',
  label: 'Our Mission',
};

const Safety: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <ValuesImage src="/images/safety.jpg" alt="Safety" />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Safety</h3>
      <p className="text-gray-600 mt-2">Safety is the foundation of everything we do.</p>
      <div className="flex">
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Safety;
