import HeroImage from '@/ui/conflict-of-interest/hero-image'
import Header from '@/ui/act-right/header'
import Commitment from '@/ui/act-right/commitment'
import Hotline from '@/ui/act-right/hotline'
import CompanySecretaryMessage from '@/ui/act-right/company-secretary-message'

const ActRightSpeakUp: React.FC = () => {
    const renderHeroImage = (src: string, alt: string) => (
        <HeroImage src={src} alt={alt} width={800} height={600} />
    );

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-4 mt-8">
            {/* First Section */}
            <section className="flex flex-col">
                <div className="justify-center py-2 mb-4 shadow-lg rounded-lg">
                    <CompanySecretaryMessage />
                </div>
                <div className="flex flex-col justify-center p-4">
                    <div>
                        <Header />
                    </div>
                    <div className="mt-16 lg:mt-20 hover:scale-105">
                        <Commitment />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="flex flex-col">
                <div className="flex justify-center py-2 mb-4 md:mt-14 shadow-lg rounded-lg">
                    {renderHeroImage("/images/act-right.jpg", "Act Right Speak Up Sketch Image")}
                </div>
                <div className="flex flex-col justify-center mt-8 md:mt-14 p-4">
                    <div>
                        <Hotline />
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
};

export default ActRightSpeakUp;
