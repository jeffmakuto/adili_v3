import MeetTheTeam from '@/ui/case-studies/meet-the-team'
import ContactUs from '@/ui/adili/contact-us'
import AnonymousReport from '@/ui/adili/anonymous-report'
import QRCode from '@/ui/codes/qr-code'
import Cases from '@/ui/case-studies/cases'

const CaseStudies: React.FC = () => {
  return (
    <main className="flex flex-col px-4 md:px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg">
          <MeetTheTeam />
          <div className="md:mt-16">
            <ContactUs />
            <div className="md:mt-16">
              <AnonymousReport />
            </div>
            <div className="hidden md:block mt-4 md:mt-12 lg:mb-8">
              <QRCode width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="shadow-lg">
          <Cases />
        </div>
      </div>
    </main>
  );
}

export default CaseStudies;
