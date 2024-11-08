'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/competition-law/header'
import CommitmentToFairCompetition from '@/ui/competition-law/commitment'
import Guidelines from '@/ui/competition-law/guidelines'

const CompetitionLaw: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/competition-law.jpg", "Competition Law Crew Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <CommitmentToFairCompetition />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 md:mt-20 shadow-lg rounded-lg">
                    {renderHeroImage("/images/competition-law1.jpg", "Competition Law Sketch Image")}
                </div>
                <div className="flex flex-col justify-center mt-4 md:mt-4 lg:mt-20 p-4 hover:scale-105">
                    <div>
                        <Guidelines />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default CompetitionLaw;