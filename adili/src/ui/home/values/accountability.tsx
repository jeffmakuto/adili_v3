import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'
import ValuesImage from '@/ui/home/values/values-image'

const subLink: SubNavLink = {
  href: '/home/accountability',
  label: 'Our Mission',
};

const Accountability: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <ValuesImage src="/images/accountability.jpg" alt="Accountability" />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Accountability</h3>
      <p className="text-gray-600 mt-2">
        I take initiative and responsibility for my actions, decisions, and results.
      </p>
      <div className="flex">
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Accountability;
