import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import '../styles/globals.css'
import GlobalError from '@/app/global-error'
import { ErrorBoundary } from 'react-error-boundary'
import Header from '@/ui/header/header'

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenya Airways | Ethics & Integrity",
  description: "Explore Kenya Airways' commitment to ethics and integrity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        <Header />
        <ErrorBoundary FallbackComponent={GlobalError}>
          <main>{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  )
}
