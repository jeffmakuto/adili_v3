import Banner from '@/ui/banner/banner'
import NavLinks from '@/ui/navigation/nav-links'

export default function Header() {
    return (
        <header className="flex flex-col">
            <div className="w-full flex justify-center md:justify-end lg:justify-end">
                <Banner />
            </div>
            <div className="w-full flex justify-center md:justify-start lg:justify-start">
                <NavLinks />
            </div>
        </header>
    );
}
