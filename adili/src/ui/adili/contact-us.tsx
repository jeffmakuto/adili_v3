import { heading, paragraph } from '@/styles/values'

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
