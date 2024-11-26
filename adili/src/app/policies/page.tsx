/**
 * Policies Component
 * 
 * This component represents the layout for the "Policies" page or section.
 * It is structured to include two main sections:
 * - A `MessageFromCEO` section, which displays a message from the CEO.
 * - A `PoliciesView` section, which displays the details or list of policies.
 * 
 * The layout is responsive, and it uses Flexbox to ensure that the content adapts to different screen sizes.
 * 
 * @returns {JSX.Element} - The rendered layout containing the CEO message and policies view.
 * 
 * @component
 * @example
 * return (
 *   <Policies />
 * )
 */

import MessageFromCEO from '@/ui/policies/message-from-ceo'
import PoliciesView from '@/ui/policies/policies-view'

const Policies: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 mt-8">
      {/* Section 1: Message from CEO */}
      <div>
        {/* The MessageFromCEO component displaying a CEO's message */}
        <MessageFromCEO />
      </div>

      {/* Section 2: Policies View */}
      <div className="flex-1 mt-16 p-4">
        {/* The PoliciesView component displays the list or content of policies */}
        <PoliciesView />
      </div>
    </main>
  );
};

export default Policies;
