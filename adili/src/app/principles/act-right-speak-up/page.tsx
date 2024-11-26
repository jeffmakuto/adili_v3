/**
 * ActRightSpeakUp Component
 *
 * This component represents the "Act Right, Speak Up" page or section, which emphasizes the 
 * organization's commitment to ethics and provides key resources for employees or stakeholders 
 * to report misconduct.
 * The page consists of multiple sections with a responsive layout, including a company secretary's 
 * message, a commitment section, a hero image, and a hotline for reporting.
 *
 * The layout is responsive, ensuring an optimal display on both smaller and larger screens.
 *
 * @returns {JSX.Element} - The rendered layout containing the company secretary message, commitment, 
 * hero image, and hotline.
 *
 * @component
 * @example
 * return (
 *   <ActRightSpeakUp />
 * )
 */

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/act-right/header'
import Commitment from '@/ui/act-right/commitment'
import Hotline from '@/ui/act-right/hotline'
import CompanySecretaryMessage from '@/ui/act-right/company-secretary-message'

const ActRightSpeakUp: React.FC = () => {
    /* Helper function to render the HeroImage with specific source and alt text */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">

                {/* First Section: Company Secretary Message and Commitment */}
                <section className="flex flex-col">
                    {/* Company Secretary's message displayed in a card-like container */}
                    <div className="justify-center py-2 mb-4 shadow-lg rounded-lg">
                        <CompanySecretaryMessage />
                    </div>

                    {/* Header and Commitment section */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Commitment section, with hover effect */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <Commitment />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image and Hotline */}
                <section className="flex flex-col">
                    {/* Hero Image section with responsive display */}
                    <div className="flex justify-center py-2 mb-4 md:mt-32 shadow-lg rounded-lg">
                        {renderHeroImage("/images/act-right.jpg", "Act Right Speak Up Sketch Image")}
                    </div>

                    {/* Hotline section displayed below the hero image */}
                    <div className="flex flex-col justify-center mt-8 md:mt-20 p-4">
                        <div>
                            {/* Hotline section for reporting with contact info */}
                            <Hotline />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ActRightSpeakUp;
