'use client'

import { faHome, faFileAlt, faBriefcase, faBullhorn, faComments } from '@fortawesome/free-solid-svg-icons'
import { LinkType } from '@/types/link'
import NavContainer from '@/ui/nav-container'

const links: LinkType[] = [
  { href: '/', label: 'Home', icon: faHome, isActive: false },
  { href: '/policies', label: 'Policies', icon: faFileAlt, isActive: false },
  { href: '/case-studies', label: 'Case Studies', icon: faBriefcase, isActive: false },
  { href: '/act-right-speak-up', label: 'Act Right Speak Up', icon: faBullhorn, isActive: false },
  { href: '/adili-chat', label: 'Adili Chat', icon: faComments, isActive: false }
];

export default function NavLinks() {
  return <NavContainer links={links} />;
}
