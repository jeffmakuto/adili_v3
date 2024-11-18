import SectionImage from '@/ui/general/image'
import Section from '@/ui/general/section'

const MissionSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
      {/* Left Column: Image on top, Old Mission below */}
      <div className="flex flex-col flex-1 space-y-4 w-full md:w-1/2">
        <div className="flex justify-center">
          <SectionImage src="/images/mission.jpg" alt="Mision image" />
        </div>
        <div className="flex justify-start">
          <Section 
            title="Old Mission"
            content="Contribute to the sustainable development of Africa."
          />
        </div>
      </div>

      {/* Right Column: New Mission */}
      <div className="flex flex-col flex-1 w-full md:w-1/2 md:justify-start">
        <Section 
          title="New Mission"
          content="To propel Africa’s prosperity by connecting its people, cultures, and markets."
          listItems={[
            "Focus on Winning in Africa",
            "Make KQ an active participant in Africa’s future",
            "More aggressive stance in the market"
          ]}
        />
      </div>
    </section>
  );
};

export default MissionSection;
