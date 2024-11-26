/**
 * ExternalActivities Component
 *
 * This component is designed to provide information and guidelines to employees regarding
 * external activities, including communication guidelines, respecting employee rights, 
 * and the company's environmental policy. The page layout is split into two sections 
 * with images and explanatory components.
 *
 * @returns {JSX.Element} - The rendered layout for the external activities page.
 * 
 * @component
 * @example
 * return (
 *   <ExternalActivities />
 * )
 */

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/external-activities/header'
import CommunicationGuidelines from '@/ui/external-activities/guidelines'
import RespectingEmployeeRights from '@/ui/external-activities/rights'
import EnvironmentalPolicy from '@/ui/external-activities/environment-policy'

const ExternalActivities: React.FC = () => {
    /* Helper function to render the HeroImage component with src and alt attributes */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Communication Guidelines */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/external-activities.jpg", "Focused Employee Image")}
                    </div>

                    {/* Header and Communication Guidelines */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Communication Guidelines component */}
                        <div className="mt-16 lg:mt-20 hover:scale-105">
                            <CommunicationGuidelines />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image, Respecting Employee Rights, and Environmental Policy */}
                <section className="flex flex-col">
                    {/* Hero Image */}
                    <div className="flex justify-center py-2 md:mt-48 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/external-activities.webp", "External Activities Sketch Image")}
                    </div>

                    {/* Respecting Employee Rights and Environmental Policy */}
                    <div className="flex flex-col justify-center mt-4 lg:mt-0 p-4">
                        <div>
                            {/* Respecting Employee Rights component */}
                            <RespectingEmployeeRights />
                        </div>

                        {/* Environmental Policy component */}
                        <div className="mt-4 hover:scale-105">
                            <EnvironmentalPolicy />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ExternalActivities;
