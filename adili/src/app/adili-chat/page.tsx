/**
 * AdiliMain Component
 *
 * This component serves as the main layout for the Adili section of the application.
 * It renders the primary content for the Adili page, which includes the `AdiliIntro`
 * component inside a flexible layout.
 *
 * @returns {JSX.Element} - The rendered main layout containing AdiliIntro component.
 *
 * @component
 * @example
 * return (
 *   <AdiliMain />
 * )
 */

import AdiliIntro from '@/ui/adili/adili-intro'

const AdiliMain: React.FC = () => {
  return (
    <main className="flex flex-col mt-8">
      {/* Flex-grow ensures this div takes available space */}
      <div className="flex-grow">
        {/* AdiliIntro component displays the introductory content */}
        <AdiliIntro />
      </div>
    </main>
  );
};

export default AdiliMain;
