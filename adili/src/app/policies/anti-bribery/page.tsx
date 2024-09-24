'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/anti-bribery/header'
import Obligations from '@/ui/anti-bribery/obligations'
import Impact from '@/ui/anti-bribery/impact'
import Duty from '@/ui/anti-bribery/duty'

const GiftsAndEntertainment: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                    {renderHeroImage("/images/anti-bribery.JPG", "Gifts and Entertainment Crew Image")}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <Duty />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 md:mt-20 shadow-lg rounded-lg">
                    {renderHeroImage("/images/anti-bribery1.jpg", "Gifts and Entertainment Anime")}
                </div>
                <div className="flex flex-col justify-center mt-12 md:mt-16 lg:mt-40 p-4">
                    <div>
                        <Impact />
                    </div>
                    <div className="mt-4 hover:scale-105">
                        <Obligations />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default GiftsAndEntertainment;
