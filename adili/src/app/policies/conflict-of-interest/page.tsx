'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/conflict-of-interest/header'
import UnderstandingConflictOfInterest from '@/ui/conflict-of-interest/understanding-conflict-of-interest'
import Guidelines from '@/ui/conflict-of-interest/guidelines'
import Commitment from '@/ui/conflict-of-interest/commitment'
import Declaration from '@/ui/conflict-of-interest/declaration'

const CONFLICT_OF_INTEREST = process.env.NEXT_PUBLIC_CONFLICT_OF_INTEREST || "#";

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
                    {renderHeroImage("/images/conflict.JPG", "Conflict Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div className="shadow-lg rounded-lg hover:scale-105">
                        <Header />
                    </div>
                    <div className="mt-16 shadow-lg rounded-lg hover:scale-105">
                        <UnderstandingConflictOfInterest />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/conflict-of-interest.jpg", "Conflict of Interest Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div className="shadow-lg rounded-lg hover:scale-105">
                        <Guidelines />
                    </div>
                    <div className="shadow-lg rounded-lg mt-4 hover:scale-105">
                        <Commitment />
                    </div>
                </div>
            </section>
            </div>
            <div className="flex justify-start md:justify-center mt-4 md:mt-8">
                    <Declaration declarationLink={CONFLICT_OF_INTEREST} />
            </div>
        </main>
    );
};

export default ConflictOfInterest;
