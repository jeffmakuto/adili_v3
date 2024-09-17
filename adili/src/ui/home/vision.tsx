import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'

const subLink: SubNavLink = {
  href: '/home/vision',
  label: 'Our Vision',
};

const Vision: React.FC = () => {
  return (
    <div className="md:pt-28">
      <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold">
        <em className="text-red-600">
          Vision
        </em>
      </h2>
      <p className="text-sm md:text-sm lg:text-lg">
        <em>
          <strong>
            To propel Africa&rsquo;s<br />
            preferred and<br />
            sustainable<br />
            aviation group.
          </strong>
        </em>
      </p>
      <div className="flex">
        <LearnMoreButton subLink={subLink} />
      </div>
    </div>
  );
};

export default Vision;
