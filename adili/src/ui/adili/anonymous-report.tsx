import { heading, paragraph } from '@/styles/values'
import QRCode from '@/ui/codes/qr-code'

/**
 * ReportAnonymously Component
 * 
 * This functional React component provides a section for reporting issues anonymously.
 * It includes a clickable link to a reporting URL and displays a QR code that users can scan.
 * The QR code is hidden on larger screens and shown on smaller ones to enhance usability.
 * 
 * @returns JSX.Element
 */
const ReportAnonymously: React.FC = () => {
  /* URL for the ethics hotline or reporting system */
  const reportUrl = process.env.NEXT_PUBLIC_KQ_ETHICS_HOTLINE_URL || '#';

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 border border-gray-200 mt-4">
      <div className="flex-1">
        {/* Heading */}
        <h2 className={heading}>Report Anonymously</h2>
        
        {/* Report link */}
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-red-600 hover:underline ${paragraph}`}
        >
          Click here to report an issue
        </a>
        
        {/* Alternative to link: Inform user to scan QR code */}
        <span className={paragraph}> or scan the QR Code</span>
      </div>

      {/* QR Code visible only on smaller screens */}
      <div className="ml-4 md:hidden">
        <QRCode width={100} height={100} />
      </div>
    </div>
  );
};

export default ReportAnonymously;
