import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'
import ValuesImage from '@/ui/home/values/values-image'

const subLink: SubNavLink = {
  href: '/home/customer-obsession',
  label: 'Our Mission',
};

const CustomerObsession: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <ValuesImage src="/images/customer obsession.jpg" alt="Customer Obsession" />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Customer Obsession</h3>
      <p className="text-gray-600 mt-2">
        I commit to creating positive memorable experiences for our customers.
      </p>
      <div className="flex">
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default CustomerObsession;
