import Image from 'next/image';

const Logo = () => {
  return (
    <div className="relative w-5/12 h-16 md:w-full md:h-24 lg:w-7/12 lg:h-32">
      <Image
        src="/images/KQ Logo.jpg"
        alt="Company Logo"
        fill
        sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 20rem"
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
