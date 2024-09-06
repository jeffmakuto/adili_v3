import Banner from '@/ui/banner/banner'
import NavLinks from '@/ui/navigation/nav-links'
import BannerImage from '@/ui/images/banner'

export default function Header() {
    return (
        <header className="fixed top-0 w-full flex flex-col p-4 z-50">
            {/* Logo positioned on the extreme left for medium and large screens */}
            <div className="w-full flex justify-center md:justify-between lg:justify-between items-center">
                {/* Hide on small screens and show on medium and larger */}
                <div className="hidden md:block lg:block">
                    <BannerImage imageSrc='/images/KQ Logo.jpg' />
                </div>
                <Banner />
            </div>
            <div className="w-full flex justify-center md:justify-start lg:justify-start">
                <NavLinks />
            </div>
        </header>
    );
}
