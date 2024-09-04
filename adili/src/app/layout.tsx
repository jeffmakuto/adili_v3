import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import '../styles/globals.css'
import NavLinks from '@/ui/nav-links'
import GlobalError from '@/app/global-error'
import { ErrorBoundary } from 'react-error-boundary'

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenya Airways | Ethics & Integrity",
  description: "Explore Kenya Airways' commitment to ethics and integrity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        <NavLinks />
        <ErrorBoundary FallbackComponent={GlobalError}>
          <main>{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  )
}
