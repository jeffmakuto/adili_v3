import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import '../styles/globals.css'
import GlobalError from '@/errors/global-error'
import { ErrorBoundary } from 'react-error-boundary'
import Header from '@/ui/header/header'
import Footer from '@/ui/footer/footer'
import FloatingChatButton from '@/ui/adili/chat/floating-chat'

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenya Airways | Ethics & Integrity",
  description: "Explore Kenya Airways' commitment to ethics and integrity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        <ErrorBoundary FallbackComponent={GlobalError}>
          <Header />
          <main>{children}</main>
          <FloatingChatButton />
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
