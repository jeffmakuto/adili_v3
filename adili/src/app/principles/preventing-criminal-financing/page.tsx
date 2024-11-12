import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/preventing-crimes/header'
import DueDiligenceResponsibilities from '@/ui/preventing-crimes/dilligence'
import NoSupportForIllegalActivities from '@/ui/preventing-crimes/illegal'

const PreventingCriminalFinancingActivities: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/preventing-crimes.JPG", "Ground Agent Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <NoSupportForIllegalActivities />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/preventing-crimes1.jpg", "Preventing Criminal Financing Activities Sketch Image")}
                </div>
                <div className="flex flex-col justify-center mt-12 lg:mt-24 p-4">
                    <div>
                        <DueDiligenceResponsibilities />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default PreventingCriminalFinancingActivities;
