/**
 * CaseStudies Component
 *
 * This component serves as the main layout for the Case Studies section of the application.
 * It is responsible for rendering the `CaseController` component inside a flexible layout.
 * The layout is designed to be responsive, adapting to different screen sizes with padding
 * adjustments for mobile and larger devices.
 *
 * @returns {JSX.Element} - The rendered layout containing the `CaseController` component.
 *
 * @component
 * @example
 * return (
 *   <CaseStudies />
 * )
 */

import CaseController from '@/ui/case-studies/case-controller'

const CaseStudies: React.FC = () => {
  return (
    <main className="flex flex-col px-4 md:px-8 mt-8">
      {/* The CaseController component manages and displays the case study content */}
      <CaseController />
    </main>
  );
};

export default CaseStudies;
