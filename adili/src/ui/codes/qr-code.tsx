import Image from 'next/image'
import { Dimensions } from '@/types/qr-code'

/**
 * QRCode Component - Displays a QR Code Image.
 * 
 * @param {Dimensions} props - Width, Height
 * @returns JSX.Element
 */
const QRCode: React.FC<Dimensions> = ({ width, height }) => {
  return (
    <div className="relative">
      <Image
        src="/images/QR-Code.png"
        alt="QR Code"
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