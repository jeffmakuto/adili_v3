'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LinkType } from '@/types/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFileAlt, faBriefcase, faBullhorn, faComments } from '@fortawesome/free-solid-svg-icons'

const links: LinkType[] = [
  { href: '/', label: 'Home', icon: faHome },
  { href: '/policies', label: 'Policies', icon: faFileAlt },
  { href: '/case-studies', label: 'Case Studies', icon: faBriefcase },
  { href: '/act-right-speak-up', label: 'Act Right Speak Up', icon: faBullhorn },
  { href: '/adili-chat', label: 'Adili Chat', icon: faComments }
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="p-4 bg-gray-100 overflow-x-auto">
      <nav aria-label="Main site navigation">
        <ul className="flex flex-nowrap space-x-4 list-none p-0 m-0">
          {links.map(({ href, label, icon }) => {
            const active = isActive(href);

            return (
              <li key={href} className="flex-shrink-0">
                <Link
                  className={`relative flex items-center px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base transition-colors duration-300
                    ${active ? 'bg-red-600 text-white border border-red-600' : 'text-gray-700 hover:bg-red-600 hover:text-white'}
                    rounded-md group`}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                >
                  <span
                    className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border border-black rounded-full mr-1 sm:mr-2
                      ${active ? 'bg-white' : 'bg-gray-200'} flex-shrink-0`}
                  >
                    <FontAwesomeIcon 
                      icon={icon || faHome} 
                      className={`text-xs sm:text-sm md:text-base ${active ? 'text-red-600' : 'text-gray-700'} flex-shrink-0`} 
                    />
                  </span>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
