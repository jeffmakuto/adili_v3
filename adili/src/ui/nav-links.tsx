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

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="py-4">
      <nav aria-label="Main site navigation">
        <ul className="flex space-x-4 list-none p-0 m-0">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative inline">
                <Link
                  className={`relative text-inherit no-underline transition-all duration-300 
                    ${isActive ? 'font-bold' : ''} 
                    group`}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-[-15px] w-full h-[4px] bg-red-500 
                      transform scale-x-0 transition-transform duration-300 
                      group-hover:scale-x-100`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
