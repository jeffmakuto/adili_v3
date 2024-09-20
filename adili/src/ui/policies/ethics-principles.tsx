import { carouselItems } from '@/data/ethics-principles'
import Carousel from '@/ui/policies/carousel'

const EthicsPrinciples: React.FC = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black">
        Ethics and Integrity Principles
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <Carousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
}

export default EthicsPrinciples;
