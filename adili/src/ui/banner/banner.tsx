'use client'

import { usePathname } from 'next/navigation'
import BannerMessage from '@/ui/banner/message'
import BannerImage from '@/ui/banner/image'

export default function Banner() {
  const pathname = usePathname();
  const showBanner = pathname !== '/adili-chat';

  if (!showBanner) return null;

  return (
    <div className="flex-shrink-0 p-4 bg-gradient-to-r from-red-500 to-gray-700 
                    text-white rounded-lg shadow-lg transition-transform 
                    transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center">

        <div className="w-1/3">
          <BannerImage imageSrc='/images/banner.JPG' />
        </div>

        <div className="w-2/3">
          <BannerMessage />
        </div>
      </div>
    </div>
  );
}
