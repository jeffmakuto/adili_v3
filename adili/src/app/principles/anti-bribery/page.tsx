/**
 * AntiBriberyAndAntiCorruption Component
 * 
 * This component represents the page or section dedicated to Anti-Bribery and Anti-Corruption policies and practices.
 * It is divided into two main sections that focus on informing the audience about the company's stance on anti-bribery, 
 * the obligations involved, and the impact of these policies.
 *
 * The page layout is responsive, featuring hero images, the company's duty toward anti-bribery, impact of anti-corruption measures, 
 * and obligations that employees or stakeholders need to follow.
 *
 * @returns {JSX.Element} - The rendered layout for Anti-Bribery and Anti-Corruption policies and practices.
 * 
 * @component
 * @example
 * return (
 *   <AntiBriberyAndAntiCorruption />
 * )
 */

import HeroImage from '@/ui/conflict-of-interest/hero-image';
import Header from '@/ui/anti-bribery/header';
import Obligations from '@/ui/anti-bribery/obligations';
import Impact from '@/ui/anti-bribery/impact';
import Duty from '@/ui/anti-bribery/duty';

const AntiBriberyAndAntiCorruption: React.FC = () => {
    /* Helper function to render the HeroImage with specific source and alt text */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">

                {/* First Section: Hero Image, Header, and Duty */}
                <section className="flex flex-col">
                    {/* Hero Image section */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/anti-bribery.JPG", "Four Cabin Crews Image")}
                    </div>

                    {/* Header and Duty section */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Duty section */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <Duty />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image, Impact, and Obligations */}
                <section className="flex flex-col">
                    {/* Hero Image section */}
                    <div className="flex justify-center py-2 mb-4 md:mt-20 shadow-lg rounded-lg">
                        {renderHeroImage("/images/anti-bribery1.jpg", "Anti-Bribery and Anti-Corruption Sketch Image")}
                    </div>

                    {/* Impact and Obligations section */}
                    <div className="flex flex-col justify-center mt-12 md:mt-16 lg:mt-40 p-4">
                        <div>
                            {/* Impact section, explaining the effects of anti-bribery measures */}
                            <Impact />
                        </div>

                        {/* Obligations section, listing the responsibilities or actions required */}
                        <div className="mt-4 hover:scale-105">
                            <Obligations />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AntiBriberyAndAntiCorruption;
