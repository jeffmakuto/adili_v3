'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/gifts-and-entertainment/header'
import DeclarationGuidelines from '@/ui/gifts-and-entertainment/declaration-guidelines'
import AcceptanceGuidelines from '@/ui/gifts-and-entertainment/acceptance-guidelines'
import ImportantNotes from '@/ui/gifts-and-entertainment/important-notes'

const ConflictOfInterest: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/gifts2.jpg", "Gifts and Entertainment Crew Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <DeclarationGuidelines />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/gifts1.png", "Gifts and Entertainment Anime")}
                </div>
                <div className="flex flex-col justify-center mt-12 lg:mt-24 p-4">
                    <div>
                        <AcceptanceGuidelines />
                    </div>
                    <div className="mt-4 hover:scale-105">
                        <ImportantNotes />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default ConflictOfInterest;