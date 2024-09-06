import Image from 'next/image'
import { BannerImageProps } from '@/types/banners'

export default function BannerImage({ imageSrc }: BannerImageProps) {
  return (
    <div className="relative w-44 h-48 md:w-56 md:h-60">
      <Image
        src={imageSrc}
        alt="Adili Chat advert pop up notification"
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center 20%',
          borderRadius: '9999px',
          border: '4px solid white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        priority
      />
    </div>
  );
}
