import Image from 'next/image'

const EthicsLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-bold mb-8">Ethics & Integrity Logo</h1>
      <Image
        src="/images/logo.png"
        alt="Ethics Logo"
        width={460}
        height={301}
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default EthicsLogo;
