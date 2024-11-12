import MessageFromCEO from '@/ui/policies/message-from-ceo'
import PoliciesView from '@/ui/policies/policies-view'

const Policies: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 mt-8">
      <div>
        <MessageFromCEO />
      </div>
      <div className="flex-1 mt-16 p-4">
        <PoliciesView />
      </div>
    </main>
  );
}

export default Policies;
