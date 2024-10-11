import Explainer from '@/ui/adili/explainer'
import ContactUs from '@/ui/adili/contact-us'
import AnonymousReport from '@/ui/adili/anonymous-report'
import QRCode from '@/ui/codes/qr-code'

export default function AdiliIntro() {
  return (
    <div className="flex flex-col mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:w-4/5">
            <Explainer />
          </div>
          <div className="flex flex-col md:w-1/5 mt-16 md:mr-4 lg:mr-20">
            <ContactUs />
            <AnonymousReport />
            <div className="hidden md:block mt-4">
              <QRCode width={100} height={100} />
            </div>
          </div>
        </div>
    </div>
  );
}
