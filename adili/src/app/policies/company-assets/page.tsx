import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/company-assets/header'
import ComplianceWithPolicies from '@/ui/company-assets/compliance'
import MaintainingInformationAccuracy from '@/ui/company-assets/accuracy'

const CompanyAssets: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/company-asset.JPG", "K64998-3 Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-8 md:mt-16 lg:mt-20 hover:scale-105">
                        <MaintainingInformationAccuracy />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 md:mt-2 shadow-lg rounded-lg">
                    {renderHeroImage("/images/company-assets.JPG", "Comapny Assets Sketch")}
                </div>
                <div className="flex flex-col justify-center mt-4 md:mt-4 p-4">
                    <div>
                        <ComplianceWithPolicies />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default CompanyAssets;
