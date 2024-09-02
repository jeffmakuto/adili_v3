import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import './globals.css'
import { NavLinks } from '@/app/ui/nav-links'

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenya Airways | Ethics & Integrity",
  description: "Explore Kenya Airways' commitment to ethics and integrity. Discover our mission, vision, values, Integrity Code and other policies.",
};
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        <NavLinks />
        <main>{children}</main>
      </body>
    </html>
  )
}