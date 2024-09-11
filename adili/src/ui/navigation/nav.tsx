import { FC } from 'react';
import Menu from '@/ui/navigation/menu';
import MobileMenu from '@/ui/navigation/mobile';
import { faHome, faFileAlt, faBriefcase, faBullhorn, faComments } from '@fortawesome/free-solid-svg-icons';
import { LinkType } from '@/types/link';

const links: LinkType[] = [
  {
    href: '/',
    label: 'Home',
    icon: faHome,
    isActive: false,
    subNavLinks: [
      { href: '/home/mission', label: 'Our Mission' },
      { href: '/home/vision', label: 'Our Vision' },
      { href: '/home/safety', label: 'Safety' },
      { href: '/home/customer-obsession', label: 'Customer Obsession' },
      { href: '/home/integrity', label: 'Integrity' },
      { href: '/home/accountability', label: 'Accountability' }
    ]
  },
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
      { href: '/policies/act-right-speak-up', label: 'Act Right Speak Up' },
      { href: '/policies/preventing-criminal-financing', label: 'Preventing criminal financing activities' },
      { href: '/policies/external-activities', label: 'External Activities' },
      { href: '/policies/company-assets', label: 'Company Assets' }
    ]
  },
  { href: '/case-studies', label: 'Case Studies', icon: faBriefcase, isActive: false },
  { href: '/our-ambassadors', label: 'Our Ambassadors', icon: faBullhorn, isActive: false },
  { href: '/adili-chat', label: 'Adili Chat', icon: faComments, isActive: false }
];

const Nav: FC = () => (
  <>
    <Menu links={links} />
    <MobileMenu links={links} />
  </>
);

export default Nav;
