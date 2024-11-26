import Image from 'next/image'
import { ValuesImageProps } from '@/types/values'

/**
 * ValuesImage Component - Displays image for values.
 * 
 * @param {ValuesImageProps} { src, alt }
 * @returns JSX.Element
 */
const ValuesImage: React.FC<ValuesImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full aspect-[3/2]">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default ValuesImage;
