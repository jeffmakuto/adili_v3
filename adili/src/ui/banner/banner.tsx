'use client'

import { usePathname } from 'next/navigation'
import BannerMessage from '@/ui/banner/message'
import BannerImage from '@/ui/images/banner'
import useHoverEffect from '@/hooks/hover'

export default function Banner() {
  const pathname = usePathname();
  const showBanner = pathname !== '/adili-chat';
  const hoverEffect = useHoverEffect({
    maxIterations: Infinity,
    hoverDuration: 2000
  });

  if (!showBanner) return null;

  return (
    <div
      className={`p-4 transition-transform transform 
                  ${hoverEffect ? 'scale-105 shadow-xl' : ''}`}
    >
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-7/10 flex justify-center">
          <BannerImage imageSrc='/images/banner.JPG' />
        </div>
        <div className="w-full md:w-3/10">
          <BannerMessage />
        </div>
      </div>
    </div>
  );
}
