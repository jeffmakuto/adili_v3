import Image from 'next/image'

/**
 * EthicsHotlineImage Component
 * 
 * This functional React component displays an image banner related to the "Act Right, Speak Up" principle.
 * It utilizes the `next/image` component for optimized image rendering in a responsive layout.
 * 
 * The image serves as a visual reinforcement for the ethics hotline, emphasizing the importance of speaking up.
 * 
 * @returns JSX.Element
 */
const EthicsHotlineImage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Optimized Image */}
      <Image
        src='/images/reporting-banner.jpeg' /* Image path */
        alt='Act Right Speak Up Image' /* Accessibility text */
        width={794} /* Image width */
        height={76} /* Image height */
        priority /* Ensures high-priority loading */
      />
    </div>
  );
};

export default EthicsHotlineImage;
