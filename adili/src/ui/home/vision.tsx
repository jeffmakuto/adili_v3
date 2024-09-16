import { SubNavLink } from '@/types/link'
import LearnMoreButton from '@/ui/buttons/learn-more'

const subLink: SubNavLink = {
  href: '/home/vision',
  label: 'Our Vision',
};

const Vision: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold">
        <em className="text-red-600">
          Vision
        </em>
      </h2>
      <p>
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
