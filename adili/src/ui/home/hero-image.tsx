import Image from 'next/image'

/**
 * HeroImage Component - Displays the Hero Image.
 * 
 * @returns JSX.Element
 */
const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full aspect-[3/2]">
      <Image
        src="/images/banner.JPG"
        alt="Crew Members"
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default HeroImage;
