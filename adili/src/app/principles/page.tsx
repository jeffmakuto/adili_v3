import EthicsPrinciples from '@/ui/principles/ethics-principles'

const Principles: React.FC = () => {
  return (
    <main className="flex flex-col mt-8">
      <div className="flex-grow">
        <EthicsPrinciples />
      </div>
    </main>
  );
};

export default Principles;
