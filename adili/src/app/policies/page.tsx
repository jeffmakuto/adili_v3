import MessageFromCEO from '@/ui/policies/message-from-ceo'
import EthicsPrinciples from '@/ui/policies/ethics-principles'
import PoliciesView from '@/ui/policies/policies-view'

const Policies: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg">
          <MessageFromCEO />
        </div>
        <div className="shadow-lg">
          <EthicsPrinciples />
        </div>
      </div>
      <div className="flex-1 mt-16 p-4">
        <PoliciesView />
      </div>
    </main>
  );
}

export default Policies;
