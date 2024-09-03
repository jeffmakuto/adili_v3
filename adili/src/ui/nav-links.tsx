'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/policies', label: 'Policies' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/act-right-speak-up', label: 'Act Right Speak Up' },
  { href: '/adili-chat', label: 'Adili Chat' }
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main site navigation">
      {links.map((link) => (
        <Link
          key={link.href}
          className={`link ${pathname === link.href ? 'active' : ''}`}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
