import { heading, paragraph } from '@/styles/values'

/**
 * ContactUs Component
 * 
 * This component renders a contact section with an email link for users to reach out with questions. It displays a heading and a paragraph with 
 * a mailto link. The contact email is taken from an environment variable, allowing the email address to be managed securely and centrally.
 * 
 * @returns JSX.Element
 */
const ContactUs: React.FC = () => {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || '#';

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 mt-4" style={{ flex: 1 }}>
      <h2 className={heading}>Contact Us</h2>
      <p className={paragraph}>
        If you have any questions, feel free to{' '}
        <a href={`mailto:${contactEmail}`} className="text-red-600 hover:underline">
          email us
        </a>.
      </p>
    </div>
  );
};

export default ContactUs;
