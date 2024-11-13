import Header from '@/ui/ambassadors/header'
import EthicsLogo from '@/ui/ambassadors/ethics-logo'
import Bulletins from '@/ui/ambassadors/bulletins'
import VideoCarousel from '@/ui/ambassadors/video-carousel'

const Ambassadors: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 mt-8">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg mt-8 md:mb-8">
          <div className="mb-4">
            <EthicsLogo />
          </div>
          <VideoCarousel />
        </div>
        <div className="mb-8">
          <Bulletins />
        </div>
      </div>
    </main>
  );
};

export default Ambassadors;
