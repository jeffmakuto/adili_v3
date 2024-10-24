import Menu from '@/ui/navigation/menu'
import MobileMenu from '@/ui/navigation/mobile'
import { faHome, faFileAlt, faBriefcase, faBullhorn, faComments } from '@fortawesome/free-solid-svg-icons'
import { LinkType } from '@/types/link'

const links: LinkType[] = [
  { href: '/', label: 'Home', icon: faHome, isActive: false },
  {
    href: '/policies',
    label: 'Policies',
    icon: faFileAlt,
    isActive: false,
    subNavLinks: [
      { href: '/policies/conflict-of-interest', label: 'Conflict of Interest' },
      { href: '/policies/gifts-and-entertainment', label: 'Gifts and Entertainment' },
      { href: '/policies/ethical-marketing', label: 'Ethical Marketing' },
      { href: '/policies/safeguarding', label: 'Safeguarding' },
      { href: '/policies/competition-law', label: 'Competition Law' },
      { href: '/policies/anti-bribery', label: 'Anti-bribery and Anti-corruption' },
      { href: '/policies/act-right-speak-up', label: 'Act Right, Speak Up' },
      { href: '/policies/preventing-criminal-financing', label: 'Preventing Criminal Financing Activities' },
      { href: '/policies/external-activities', label: 'External Activities' },
      { href: '/policies/company-assets', label: 'Company Assets' }
    ]
  },
  { href: '/case-studies', label: 'Case Studies', icon: faBriefcase, isActive: false },
  { href: '/our-ambassadors', label: 'Our Ambassadors', icon: faBullhorn, isActive: false },
  { href: '/adili-chat', label: 'Adili', icon: faComments, isActive: false },
];

const Nav: React.FC = () => (
  <>
    <Menu links={links} />
    <MobileMenu links={links} />
  </>
);

export default Nav;
