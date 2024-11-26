import Menu from '@/ui/navigation/menu'
import MobileMenu from '@/ui/navigation/mobile'
import { faHome, faFileAlt, faBalanceScale, faBriefcase, faBullhorn, faComments } from '@fortawesome/free-solid-svg-icons'
import { LinkType } from '@/types/link'

const links: LinkType[] = [
  { href: '/', label: 'Home', icon: faHome, isActive: false },
  { href: '/policies', label: 'Policies', icon: faFileAlt, isActive: false },
  {
    href: '/principles',
    label: 'Principles',
    icon: faBalanceScale,
    isActive: false,
    subNavLinks: [
      { href: '/principles/conflict-of-interest', label: 'Conflict of Interest' },
      { href: '/principles/gifts-and-entertainment', label: 'Gifts and Entertainment' },
      { href: '/principles/ethical-marketing', label: 'Ethical Marketing' },
      { href: '/principles/safeguarding', label: 'Safeguarding' },
      { href: '/principles/competition-law', label: 'Competition Law' },
      { href: '/principles/anti-bribery', label: 'Anti-bribery and Anti-corruption' },
      { href: '/principles/act-right-speak-up', label: 'Act Right, Speak Up' },
      { href: '/principles/preventing-criminal-financing', label: 'Preventing Criminal Financing Activities' },
      { href: '/principles/external-activities', label: 'External Activities' },
      { href: '/principles/company-assets', label: 'Company Assets' }
    ]
  },
  { href: '/case-studies', label: 'Case Studies', icon: faBriefcase, isActive: false },
  { href: '/our-ambassadors', label: 'Our Ambassadors', icon: faBullhorn, isActive: false },
  { href: '/adili-chat', label: 'Adili', icon: faComments, isActive: false },
];

/**
 * Nav Component - Displays the Navigation.
 * 
 * @returns JSX.Element
 */
const Nav: React.FC = () => (
  <>
    <Menu links={links} />
    <MobileMenu links={links} />
  </>
);

export default Nav;
