/**
 * EthicalMarketing Component
 *
 * This component represents the page that addresses the company's ethical approach to marketing, 
 * including the guidelines for marketing promotions and sponsorships. It provides a visual representation 
 * of the company's ethical marketing principles through hero images and components that explain the policies 
 * and rules in place for ethical marketing practices.
 *
 * @returns {JSX.Element} - The rendered layout for the ethical marketing page.
 * 
 * @component
 * @example
 * return (
 *   <EthicalMarketing />
 * )
 */

'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/ethical-marketing/header'
import GuidelinesForMarketingPromotions from '@/ui/ethical-marketing/guidelines'
import SponsorshipPolicy from '@/ui/ethical-marketing/sponsorship'

const EthicalMarketing: React.FC = () => {
    /* Helper function to render the HeroImage component with src and alt attributes */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Marketing Promotion Guidelines */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/ethical-marketing2.jpg", "Ethical Marketing Crew Image")}
                    </div>

                    {/* Header and Guidelines for Marketing Promotions */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Guidelines for Marketing Promotions component */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <GuidelinesForMarketingPromotions />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image and Sponsorship Policy */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/ethical-marketing1.webp", "Ethical Marketing Anime")}
                    </div>

                    {/* Sponsorship Policy Explanation */}
                    <div className="flex flex-col justify-center mt-12 lg:mt-24 p-4">
                        <div>
                            {/* Sponsorship Policy component */}
                            <SponsorshipPolicy />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default EthicalMarketing;
