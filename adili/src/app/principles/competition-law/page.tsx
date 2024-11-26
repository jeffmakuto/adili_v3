/**
 * CompetitionLaw Component
 * 
 * This component represents the page or section that covers topics related to competition law, 
 * specifically focusing on the company's commitment to fair competition and the guidelines for 
 * adhering to competition law regulations. It is divided into two main sections that explain the 
 * company's stance on fair competition and the specific guidelines it follows to ensure compliance.
 *
 * The page layout is responsive, featuring hero images and sections for the relevant information.
 * The first section explains the company's commitment to fair competition, while the second section 
 * focuses on competition law guidelines.
 *
 * @returns {JSX.Element} - The rendered layout for the competition law and regulations page.
 * 
 * @component
 * @example
 * return (
 *   <CompetitionLaw />
 * )
 */

'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/competition-law/header'
import CommitmentToFairCompetition from '@/ui/competition-law/commitment'
import Guidelines from '@/ui/competition-law/guidelines'

const CompetitionLaw: React.FC = () => {
    /* Helper function to render the HeroImage with a specific source and alt text */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Commitment to Fair Competition */}
                <section className="flex flex-col">
                    {/* Hero Image section */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/competition-law.jpg", "Competition Law Crew Image")}
                    </div>

                    {/* Header and Commitment to Fair Competition section */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Commitment to Fair Competition section */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <CommitmentToFairCompetition />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image and Guidelines */}
                <section className="flex flex-col">
                    {/* Hero Image section */}
                    <div className="flex justify-center py-2 mb-4 md:mt-20 shadow-lg rounded-lg">
                        {renderHeroImage("/images/competition-law1.jpg", "Competition Law Sketch Image")}
                    </div>

                    {/* Guidelines section */}
                    <div className="flex flex-col justify-center mt-4 md:mt-4 lg:mt-20 p-4 hover:scale-105">
                        <div>
                            {/* Guidelines component */}
                            <Guidelines />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default CompetitionLaw;
