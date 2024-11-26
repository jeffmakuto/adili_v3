import Explainer from '@/ui/adili/explainer'
import ContactUs from '@/ui/adili/contact-us'
import AnonymousReport from '@/ui/adili/anonymous-report'
import QRCode from '@/ui/codes/qr-code'

/**
 * AdiliIntro Component
 * 
 * This functional React component introduces the Adili platform. It combines multiple
 * subcomponents to present an explanatory section, contact options, anonymous reporting, 
 * and a QR code for quick access.
 * 
 * @returns JSX.Element
 */
export default function AdiliIntro() {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex flex-col md:flex-row">
        {/* Explainer Section */}
        <div className="flex-1 md:w-4/5">
          <Explainer />
        </div>
        
        {/* Sidebar with Contact and QR Code */}
        <div className="flex flex-col md:w-1/5 mt-16 md:mr-4 lg:mr-20">
          <ContactUs />
          <AnonymousReport />
          
          {/* QR Code displayed only on larger screens */}
          <div className="hidden md:block mt-4">
            <QRCode width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
