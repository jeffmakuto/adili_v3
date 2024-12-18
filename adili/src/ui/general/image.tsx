import Image from 'next/image'
import { SectionImageProps } from '@/types/general'

/**
 * SectionImage Component - Displays an Image in a Section.
 * 
 * @param {SectionImageProps} props - Image Source, Image Alt
 * @returns JSX.Element
 */
const SectionImage: React.FC<SectionImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full aspect-[3/2]">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default SectionImage;
