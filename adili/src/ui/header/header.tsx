import ScrollingMessage from '@/ui/header/scroll'
import Nav from '@/ui/navigation/nav'
import ImageSlider from '@/ui/header/slider'

export default function Header() {
  return (
    <header>
      {/* Fixed Scrolling Message */}
      <div className="fixed top-0 w-full flex flex-col z-50 bg-white">
        <ScrollingMessage />
      </div>
      {/* Slider Image */}
      <div className="mt-12">
        <ImageSlider />
      </div>
      {/* Navigation */}
      <div className="mt-16">
        <Nav />
      </div>
    </header>
  );
}
