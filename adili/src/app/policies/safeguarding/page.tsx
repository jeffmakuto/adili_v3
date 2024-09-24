'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/safeguarding/header'
import GuidelinesForMarketingPromotions from '@/ui/ethical-marketing/guidelines'
import SponsorshipPolicy from '@/ui/ethical-marketing/sponsorship'
import ZeroTolerancePolicy from '@/ui/safeguarding/zero-tolerance'
import Commitment from '@/ui/safeguarding/commitment'

const EthicalMarketing: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/safeguarding.JPG", "Safeguarding Crew Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <ZeroTolerancePolicy />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/safeguarding1.jpg", "Ethical Marketing Anime")}
                </div>
                <div className="flex flex-col justify-center mt-4 lg:mt-4 p-4 hover:scale-105">
                    <div>
                        <Commitment />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default EthicalMarketing;
