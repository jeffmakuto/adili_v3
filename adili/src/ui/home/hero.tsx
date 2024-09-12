import TitleDescription from '@/ui/home/title-description';
import HeroImage from '@/ui/home/hero-image';
import Mission from '@/ui/home/mission';
import Vision from '@/ui/home/vision';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center overflow-x-hidden shadow-2xl bg-[#F9E9E4]">
      {/* Container for TitleDescription */}
      <div className="flex flex-col justify-start p-4">
        <TitleDescription />
      </div>

      {/* Container for HeroImage */}
      <div className="flex justify-center w-full md:w-1/2 p-4">
        <HeroImage />
      </div>

      {/* Container for Mission and Vision */}
      <div className="flex flex-row justify-center md:justify-end space-y-4 space-x-32 md:space-x-16 p-4">
        <Mission />
        <Vision />
      </div>
    </section>
  );
};

export default Hero;
