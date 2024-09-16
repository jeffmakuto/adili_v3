import Image from 'next/image'

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full aspect-[1/1]">
      <Image
        src="/images/banner.png"
        alt="Crew Members"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default HeroImage;
