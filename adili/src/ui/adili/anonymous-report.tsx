import { heading, paragraph } from '@/styles/values'
import QRCode from '@/ui/codes/qr-code'

const ReportAnonymously: React.FC = () => {
  const reportUrl = process.env.NEXT_PUBLIC_KQ_ETHICS_HOTLINE_URL || '#';

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 border border-gray-200 mt-4">
      <div className="flex-1">
        <h2 className={heading}>Report Anonymously</h2>
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-red-600 hover:underline ${paragraph}`}
        >
          Click here to report an issue
        </a>
        <span className={paragraph}> or scan the QR Code</span>
      </div>
      <div className="ml-4 md:hidden">
        <QRCode width={100} height={100} />
      </div>
    </div>
  );
};

export default ReportAnonymously;
