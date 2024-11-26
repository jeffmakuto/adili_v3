/**
 * GiftsAndEntertainment Component
 *
 * This component displays guidelines for employees regarding the acceptance or giving of 
 * gifts and entertainment in a corporate setting. It includes sections on declaration 
 * guidelines, acceptance guidelines, important notes, and a final declaration.
 *
 * @returns {JSX.Element} - The rendered layout for the Gifts and Entertainment page.
 *
 * @component
 * @example
 * return (
 *   <GiftsAndEntertainment />
 * )
 */

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/gifts-and-entertainment/header'
import DeclarationGuidelines from '@/ui/gifts-and-entertainment/declaration-guidelines'
import AcceptanceGuidelines from '@/ui/gifts-and-entertainment/acceptance-guidelines'
import ImportantNotes from '@/ui/gifts-and-entertainment/important-notes'
import Declaration from '@/ui/gifts-and-entertainment/declaration'

const GIFTS = process.env.NEXT_PUBLIC_GIFTS || "#";

const GiftsAndEntertainment: React.FC = () => {
    /* Helper function to render the HeroImage component with src and alt attributes */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Declaration Guidelines */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/gifts2.jpg", "Gifts and Entertainment Crew Image")}
                    </div>

                    {/* Header and Declaration Guidelines */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Declaration Guidelines component */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <DeclarationGuidelines />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image, Acceptance Guidelines, and Important Notes */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/gifts1.png", "Gifts and Entertainment Anime")}
                    </div>

                    {/* Acceptance Guidelines and Important Notes */}
                    <div className="flex flex-col justify-center mt-12 lg:mt-24 p-4">
                        <div>
                            {/* Acceptance Guidelines component */}
                            <AcceptanceGuidelines />
                        </div>

                        {/* Important Notes component */}
                        <div className="mt-4 hover:scale-105">
                            <ImportantNotes />
                        </div>
                    </div>
                </section>
            </div>

            {/* Declaration Link */}
            <div className="flex justify-start sm:mt-0 md:mt-2 lg:mt-4 px-2">
                <Declaration declarationLink={GIFTS} />
            </div>
        </main>
    );
};

export default GiftsAndEntertainment;
