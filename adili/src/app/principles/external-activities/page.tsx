import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/external-activities/header'
import CommunicationGuidelines from '@/ui/external-activities/guidelines'
import RespectingEmployeeRights from '@/ui/external-activities/rights'
import EnvironmentalPolicy from '@/ui/external-activities/environment-policy'

const ExternalActivities: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/external-activities.jpg", "Focused Employee Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <CommunicationGuidelines />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 md:mt-24 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/external-activities.webp", "External Activities Sketch Image")}
                </div>
                <div className="flex flex-col justify-center mt-4 lg:mt-32 p-4">
                    <div>
                        <RespectingEmployeeRights />
                    </div>
                    <div className="mt-4 hover:scale-105">
                        <EnvironmentalPolicy />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default ExternalActivities;
