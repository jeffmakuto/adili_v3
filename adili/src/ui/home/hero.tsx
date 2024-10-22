import TitleDescription from '@/ui/home/title-description'
import HeroImage from '@/ui/home/hero-image'
import Mission from '@/ui/home/mission/mission'
import Vision from '@/ui/home/vision/vision'

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center overflow-x-hidden shadow-2xl bg-[#F9E9E4]">
      <div className="flex flex-col justify-start p-2">
        <TitleDescription />
      </div>

      <div className="flex justify-center w-full md:w-1/2 lg:pt-16">
        <HeroImage />
      </div>

      <div className="flex flex-row justify-center md:justify-end space-y-4 space-x-32 md:space-x-16 p-2">
        <Mission />
        <Vision />
      </div>
    </section>
  );
};

export default Hero;
