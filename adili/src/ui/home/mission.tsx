import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'

const subLink: SubNavLink = {
  href: '/home/mission',
  label: 'Our Mission',
};

const Mission: React.FC = () => {
  return (
    <div className="md:pt-28">
      <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold">
        <em className="text-red-600">
          Our<br />
          Mission
        </em>
      </h2>
      <p className="text-sm md:text-sm lg:text-lg">
        <em>
          <strong>
            To propel Africa&rsquo;s<br />
            prosperity by<br />
            connecting its<br />
            people, cultures<br />
            and markets.
          </strong>
        </em>
      </p>
      <div className="flex">
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Mission;
