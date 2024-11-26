import Image from 'next/image'
import { HeroImageProps } from '@/types/policies'

/**
 * HeroImage Component - Displays a Hero Image.
 * 
 * @param {HeroImageProps} props - Image Source, Alt Text, Width, Height
 * @returns JSX.Element
 */
const HeroImage: React.FC<HeroImageProps> = ({ src, alt, width, height }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

export default HeroImage;
