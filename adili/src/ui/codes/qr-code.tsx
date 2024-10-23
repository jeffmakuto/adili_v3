import Image from 'next/image'
import { Dimensions } from '@/types/qr-code'

const QRCode: React.FC<Dimensions> = ({ width, height }) => {
  return (
    <div className="relative">
      <Image
        src="/images/Qr Code.png"
        alt="Qr Code"
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
};

export default QRCode;
