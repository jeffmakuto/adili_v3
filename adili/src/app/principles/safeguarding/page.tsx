/**
 * Safeguarding Component
 *
 * This component outlines the safeguarding policies, emphasizing zero tolerance for
 * misconduct and the organization's commitment to ensuring safety and security.
 * It includes sections about the zero tolerance policy and the organization's commitment to safeguarding.
 *
 * @returns {JSX.Element} - The rendered layout for the Safeguarding page.
 *
 * @component
 * @example
 * return (
 *   <Safeguarding />
 * )
 */

'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/safeguarding/header'
import ZeroTolerancePolicy from '@/ui/safeguarding/zero-tolerance'
import Commitment from '@/ui/safeguarding/commitment'

const Safeguarding: React.FC = () => {
    /* Helper function to render the HeroImage component with src and alt attributes */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Zero Tolerance Policy */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/safeguarding.JPG", "Safeguarding Crew Image")}
                    </div>

                    {/* Header and Zero Tolerance Policy */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title or introductory text */}
                            <Header />
                        </div>

                        {/* Zero Tolerance Policy component */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <ZeroTolerancePolicy />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image and Commitment */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/safeguarding1.jpg", "Safeguarding Sketch Image")}
                    </div>

                    {/* Commitment component */}
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

export default Safeguarding;
