import Banner from '@/ui/banner/banner'
import NavLinks from '@/ui/navigation/nav-links'

export default function Header() {
    return (
        <header>
            <div className="w-full flex justify-between items-center px-4 py-2">
                <div className="w-2/5 flex">
                    <NavLinks />
                </div>
                <div className="w-3/10 text-right">
                    <Banner />
                </div>
            </div>
        </header>
    );
}
