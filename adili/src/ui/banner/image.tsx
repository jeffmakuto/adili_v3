import Image from 'next/image'
import { BannerImageProps } from '@/types/banners'

export default function BannerImage({ imageSrc }: BannerImageProps) {
  return (
    <div className="relative w-32 h-32">
      <Image
        src={imageSrc}
        alt="Adili Chat advert pop up notification"
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        style={{
          objectFit: 'cover',
          borderRadius: '9999px',
          border: '4px solid white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        priority
      />
    </div>
  );
}
