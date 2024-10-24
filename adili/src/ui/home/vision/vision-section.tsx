import SectionImage from '@/ui/general/image'
import Section from '@/ui/general/section'

const VisionSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
      {/* Left Column: Image on top, Old Vision below */}
      <div className="flex flex-col flex-1 space-y-4 w-full md:w-1/2">
        <div className="flex justify-center">
          <SectionImage src="/images/banner.JPG" alt="Vision Image" />
        </div>
        <div className="flex justify-start">
          <Section 
            title="Old Vision"
            content="To be the Pride of Africa by Inspiring our people and delighting our guests consistently."
          />
        </div>
      </div>

      {/* Right Column: New Vision */}
      <div className="flex flex-col flex-1 w-full md:w-1/2 md:justify-start">
        <Section 
          title="New Vision"
          content="To be Africa's preferred and sustainable aviation group."
          listItems={[
            "Succinct and emotionally appealing",
            "Refresh & reset the organization",
            "Define KQ of the future"
          ]}
        />
      </div>
    </section>
  );
};

export default VisionSection;
