import Header from '@/ui/ambassadors/header'
import EthicsLogo from '@/ui/ambassadors/ethics-logo'
import Bulletins from '@/ui/ambassadors/bulletins'

const Ambassadors: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 mt-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center mt-8">
          <EthicsLogo />
        </div>
        <div className="shadow-lg">
          <Bulletins />
        </div>
      </div>
      <div className="flex-1 mt-16 p-4">
      </div>
    </main>
  );
}

export default Ambassadors;
