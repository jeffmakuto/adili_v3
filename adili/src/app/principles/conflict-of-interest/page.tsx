// app/conflict-of-interest/ConflictOfInterest.tsx

/**
 * ConflictOfInterest Component
 *
 * This component represents the page that explains and addresses the issue of conflict of interest. 
 * It provides information about what constitutes a conflict of interest, guidelines for identifying it, 
 * the company's commitment to preventing it, and the declaration process.
 *
 * The page layout is split into two main sections with detailed explanations and images to provide clarity 
 * on the subject of conflict of interest. The page also includes a declaration link for users to submit or 
 * view their conflict of interest declaration.
 *
 * @returns {JSX.Element} - The rendered layout for the conflict of interest page.
 * 
 * @component
 * @example
 * return (
 *   <ConflictOfInterest />
 * )
 */

'use client'

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/conflict-of-interest/header'
import UnderstandingConflictOfInterest from '@/ui/conflict-of-interest/understanding-conflict-of-interest'
import Guidelines from '@/ui/conflict-of-interest/guidelines'
import Commitment from '@/ui/conflict-of-interest/commitment'
import Declaration from '@/ui/conflict-of-interest/declaration'

const CONFLICT_OF_INTEREST = process.env.NEXT_PUBLIC_CONFLICT_OF_INTEREST || "#";

const ConflictOfInterest: React.FC = () => {
    /* Helper function to render the HeroImage component with src and alt attributes */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Understanding Conflict of Interest */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/conflict.JPG", "Conflict Image")}
                    </div>

                    {/* Header and Understanding Conflict of Interest */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Understanding Conflict of Interest component */}
                        <div className="mt-12 lg:mt-20 hover:scale-105">
                            <UnderstandingConflictOfInterest />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image, Guidelines, and Commitment */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/conflict-of-interest.jpg", "Conflict of Interest Image")}
                    </div>

                    {/* Guidelines and Commitment to Prevent Conflict of Interest */}
                    <div className="flex flex-col justify-center mt-4 lg:mt-8 p-4">
                        <div>
                            {/* Guidelines component */}
                            <Guidelines />
                        </div>

                        {/* Commitment to Prevent Conflict of Interest */}
                        <div className="mt-4 hover:scale-105">
                            <Commitment />
                        </div>
                    </div>
                </section>
            </div>

            {/* Declaration Link Section */}
            <div className="flex justify-start sm:mt-0 md:mt-2 lg:mt-4 px-2">
                {/* Declaration component with the link to submit the conflict of interest declaration */}
                <Declaration declarationLink={CONFLICT_OF_INTEREST} />
            </div>
        </main>
    );
};

export default ConflictOfInterest;
