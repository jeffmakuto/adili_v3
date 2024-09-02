'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === '/policies' ? 'active' : ''}`}
        href="/policies"
      >
        Policies
      </Link>

      <Link
        className={`link ${pathname === '/case-studies' ? 'active' : ''}`}
        href="/case-studies"
      >
        Case Studies
      </Link>

      <Link
        className={`link ${pathname === '/act-right-speak-up' ? 'active' : ''}`}
        href="/act-right-speak-up"
      >
        Act Right Speak Up
      </Link>

      <Link
        className={`link ${pathname === '/adili-chat' ? 'active' : ''}`}
        href="/adili-chat"
      >
        Adili Chat
      </Link>
    </nav>
  )
}
