import Image from 'next/image'

const QRCode: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="/images/Qr Code.png"
        alt="Ethics Logo"
        width={205}
        height={205}
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default QRCode;
