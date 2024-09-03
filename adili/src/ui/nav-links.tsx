'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LinkType } from '@/types/link'

const links: LinkType[] = [
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
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={`link ${pathname === link.href ? 'active' : ''}`}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
