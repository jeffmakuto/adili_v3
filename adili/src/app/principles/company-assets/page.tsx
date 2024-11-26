/**
 * CompanyAssets Component
 * 
 * This component represents the page or section that focuses on the management, compliance, and accuracy 
 * of company assets and policies. It is divided into two main sections that inform the audience about 
 * maintaining information accuracy and complying with company policies.
 *
 * The page layout is responsive, featuring hero images and sections for the relevant information.
 * The first section explains how the company maintains accurate information, while the second section focuses 
 * on compliance with company policies.
 *
 * @returns {JSX.Element} - The rendered layout for the company assets and policies.
 * 
 * @component
 * @example
 * return (
 *   <CompanyAssets />
 * )
 */

import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/company-assets/header'
import ComplianceWithPolicies from '@/ui/company-assets/compliance'
import MaintainingInformationAccuracy from '@/ui/company-assets/accuracy'

const CompanyAssets: React.FC = () => {
    /* Helper function to render the HeroImage with specific source and alt text */
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            {/* Main grid layout for the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
                
                {/* First Section: Hero Image, Header, and Maintaining Information Accuracy */}
                <section className="flex flex-col">
                    {/* Hero Image section */}
                    <div className="flex justify-center py-2 mb-4 shadow-lg rounded-lg">
                        {renderHeroImage("/images/company-asset.jpg", "K64998-3 Image")}
                    </div>

                    {/* Header and Maintaining Information Accuracy section */}
                    <div className="flex flex-col justify-center p-4">
                        <div>
                            {/* Header component for the title and introductory text */}
                            <Header />
                        </div>

                        {/* Maintaining Information Accuracy section */}
                        <div className="mt-8 md:mt-16 lg:mt-20 hover:scale-105">
                            <MaintainingInformationAccuracy />
                        </div>
                    </div>
                </section>

                {/* Second Section: Hero Image and Compliance With Policies */}
                <section className="flex flex-col">
                    {/* Hero Image section */}
                    <div className="flex justify-center py-2 mb-4 md:mt-2 shadow-lg rounded-lg">
                        {renderHeroImage("/images/company-assets.JPG", "Company Assets Sketch Image")}
                    </div>

                    {/* Compliance With Policies section */}
                    <div className="flex flex-col justify-center mt-4 md:mt-4 p-4">
                        <div>
                            {/* Compliance With Policies section */}
                            <ComplianceWithPolicies />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default CompanyAssets;
