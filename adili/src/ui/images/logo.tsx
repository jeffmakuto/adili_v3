import Image from 'next/image';

const Logo = () => {
  return (
    <div className="relative w-24 h-16 md:w-60 md:h-52">
      <Image
        src="/images/logo.png"
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
