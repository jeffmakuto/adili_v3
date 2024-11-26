import TitleDescription from '@/ui/home/title-description'
import HeroImage from '@/ui/home/hero-image'
import Mission from '@/ui/home/mission/mission'
import Vision from '@/ui/home/vision/vision'

/**
 * Hero Component - Displays the Hero section.
 * 
 * @returns JSX.Element
 */
const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center justify-center overflow-x-hidden shadow-2xl bg-[#F9E9E4]">
      <div className="flex flex-col justify-start px-4 pt-8">
        <TitleDescription />
      </div>

      <div className="flex justify-center w-full md:w-1/2 pt-16">
        <HeroImage />
      </div>

      <div className="flex flex-col px-2 pt-8 md:pt-0 mb-4">
        <div className="flex flex-col items-start">
          <Mission />
        </div>
        <div className="flex flex-col items-start">
          <Vision />
        </div>
      </div>
    </section>
  );
};

export default Hero;
