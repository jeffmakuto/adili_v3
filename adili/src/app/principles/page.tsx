/**
 * Principles Component
 *
 * This component is used to display the ethics principles of the organization.
 * It includes a main section where the `EthicsPrinciples` component is rendered.
 *
 * @returns {JSX.Element} - The rendered layout for the Principles page.
 *
 * @component
 * @example
 * return (
 *   <Principles />
 * )
 */

import EthicsPrinciples from '@/ui/principles/ethics-principles'

const Principles: React.FC = () => {
  return (
    <main className="flex flex-col mt-8">
      {/* The main content wrapper for the ethics principles */}
      <div className="flex-grow">
        <EthicsPrinciples />
      </div>
    </main>
  );
};

export default Principles;
