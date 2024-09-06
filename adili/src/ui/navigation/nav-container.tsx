'use client'

import React, { useState } from 'react'
import DesktopMenu from '@/ui/menu/desktop'
import MobileMenu from '@/ui/menu/mobile'
import HamburgerMenuButton from '@/ui/menu/hamburger'
import { NavProps } from '@/types/link'

const NavContainer: React.FC<NavProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="p-4 border border-white rounded-lg shadow-lg">
      <nav aria-label="Main site navigation" role="navigation" className="relative">
        <DesktopMenu links={links} />
        <div className="flex justify-between items-center lg:hidden">
          <HamburgerMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} links={links} />
      </nav>
    </div>
  );
};

export default NavContainer;
