import Image from 'next/image'

const Logo = () => {
  return (
    <div className="relative w-48 h-40 lg:w-60 lg:h-40">
      <Image
        src="/images/logo.png"
        alt="Ethics & Integrity Logo"
        fill
        sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 20rem"
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
