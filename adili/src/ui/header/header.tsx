import ScrollingMessage from '@/ui/header/scroll'
import Nav from '@/ui/navigation/nav'
import ImageSlider from '@/ui/header/slider'

/**
 * Header Component - Displays the Header Information.
 * 
 * @returns JSX.Element
 */
export default function Header() {
  return (
    <header>
      {/* Fixed Scrolling Message */}
      <div className="fixed top-0 w-full z-50 bg-white">
        <ScrollingMessage />
      </div>
      {/* Slider Image */}
      <div className="mt-12">
        <ImageSlider />
      </div>
      {/* Navigation */}
      <div className="mx-4 mt-6 shadow-lg inline-block">
        <Nav />
      </div>
    </header>
  );
}
