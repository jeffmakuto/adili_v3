import ReturnToTopButton from '@/ui/buttons/return-to-top'
import { footerStyles } from '@/styles/footer'

/**
 * Footer Component - Displays the Footer section.
 * 
 * @returns JSX.Element
 */
const Footer: React.FC = () => {
  const kqEthicsHotlineUrl = process.env.NEXT_PUBLIC_KQ_ETHICS_HOTLINE_URL || '#';
  const privacyPolicyUrl = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL || '#';
  const cookiePolicyUrl = process.env.NEXT_PUBLIC_COOKIE_POLICY_URL || '#';

  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.content}>
        <div className={footerStyles.linksContainer}>
          <a href={kqEthicsHotlineUrl} target="_blank" rel="noopener noreferrer" className={footerStyles.link}>KQ Ethics Hotline</a>
          <span className={footerStyles.separator}>|</span>
          <a href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer" className={footerStyles.link}>Privacy Policy</a>
          <span className={footerStyles.separator}>|</span>
          <a href={cookiePolicyUrl} target="_blank" rel="noopener noreferrer" className={footerStyles.link}>Cookie Policy</a>
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
