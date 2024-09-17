import ReturnToTopButton from '@/ui/buttons/return-to-top'
import { footerStyles } from '@/styles/footer'

const Footer: React.FC = () => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.content}>
        <div className={footerStyles.linksContainer}>
          <a href="#" className={footerStyles.link}>Privacy Policy</a>
          <span className={footerStyles.separator}>|</span>
          <a href="#" className={footerStyles.link}>Terms of Service</a>
          <span className={footerStyles.separator}>|</span>
          <a href="#" className={footerStyles.link}>Cookie Policy</a>
        </div>
        <ReturnToTopButton />
        <p className={footerStyles.copyright}>
          &copy; {new Date().getFullYear()} KQ Ethics & Integrity. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
