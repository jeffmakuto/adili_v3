import Explainer from '@/ui/adili/explainer'
import ContactUs from '@/ui/adili/contact-us'
import AnonymousReport from '@/ui/adili/anonymous-report'

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <Explainer />
      <ContactUs />
      <AnonymousReport />
    </div>
  );
}
