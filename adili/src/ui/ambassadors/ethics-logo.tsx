import Image from 'next/image'

/**
 * EthicsLogo Component
 * 
 * The `EthicsLogo` component displays the "Act Right Speak Up" logo image.
 * It uses Next.js' `Image` component for optimized image loading, responsive 
 * sizes, and priority loading for better performance.
 * 
 * @returns JSX.Element
 */
const EthicsLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      {/* Logo Image */}
      <Image
        src="/images/act-right-speak-up-logo.png"
        alt="Act Right Speak Up Logo"
        width={500}
        height={300}
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default EthicsLogo;
