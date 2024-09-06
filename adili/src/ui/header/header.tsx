import Banner from '@/ui/banner/banner'
import NavLinks from '@/ui/navigation/nav-links'
import Logo from '@/ui/images/logo'

export default function Header() {
    return (
        <header className="fixed top-0 w-full flex flex-col p-4 z-50">
            {/* Flex container for logo and banner */}
            <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between">
                {/* Logo container */}
                <div className="w-full flex justify-start md:justify-start">
                    <Logo />
                </div>
                {/* Banner container */}
                <div className="w-full flex justify-start md:justify-end">
                    <Banner />
                </div>
            </div>
            {/* NavLinks container */}
            <div className="w-full flex justify-start">
                <NavLinks />
            </div>
        </header>
    );
}
