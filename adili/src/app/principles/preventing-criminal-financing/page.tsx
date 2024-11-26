/**
 * PreventingCriminalFinancingActivities Component
 *
 * This component provides guidelines on preventing criminal financing activities within the organization.
 * It covers topics such as due diligence responsibilities and ensuring no support for illegal activities.
 * The component includes images and detailed explanations across two main sections.
 *
 * @returns {JSX.Element} - The rendered layout for the Preventing Criminal Financing Activities page.
 *
 * @component
 * @example
 * return (
 *   <PreventingCriminalFinancingActivities />
 * )
 */

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/preventing-crimes/header'
import DueDiligenceResponsibilities from '@/ui/preventing-crimes/dilligence'
import NoSupportForIllegalActivities from '@/ui/preventing-crimes/illegal'

const PreventingCriminalFinancingActivities: React.FC = () => {
    /* Helper function to render the HeroImage component with src and alt attributes */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and No Support for Illegal Activities */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/preventing-crimes.JPG", "Ground Agent Image")}
                    </div>

                    {/* Header and No Support for Illegal Activities */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* No Support for Illegal Activities component */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <NoSupportForIllegalActivities />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image and Due Diligence Responsibilities */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/preventing-crimes1.jpg", "Preventing Criminal Financing Activities Sketch Image")}
                    </div>

                    {/* Due Diligence Responsibilities component */}
                    <div className="flex flex-col justify-center mt-12 lg:mt-24 p-4">
                        <div>
                            <DueDiligenceResponsibilities />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PreventingCriminalFinancingActivities;
