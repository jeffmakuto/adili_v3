/**
 * Ambassadors Component
 * 
 * This component serves as the main layout for the "Ambassadors" page or section.
 * It is responsible for displaying a header, a video carousel with the Ethics logo, 
 * and a bulletins section in a responsive grid layout. The layout adapts to different screen sizes 
 * using Flexbox and Grid, ensuring an optimal viewing experience across devices.
 *
 * The component includes:
 * - A `Header` for the page title or navigation.
 * - An `EthicsLogo` to showcase the organization's branding or ethics statement.
 * - A `VideoCarousel` to display a series of videos in a carousel format.
 * - A `Bulletins` section to display important updates or messages for the ambassadors.
 *
 * @returns {JSX.Element} - The rendered layout containing the header, video carousel, ethics logo, and bulletins.
 *
 * @component
 * @example
 * return (
 *   <Ambassadors />
 * )
 */

import Header from '@/ui/ambassadors/header'
import EthicsLogo from '@/ui/ambassadors/ethics-logo'
import Bulletins from '@/ui/ambassadors/bulletins'
import VideoCarousel from '@/ui/ambassadors/video-carousel'

const Ambassadors: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 mt-8">
      {/* The main container uses Flexbox for a column layout with responsive padding */}
      <div>
        {/* Header component to render the title or navigation for the page */}
        <Header />
      </div>

      {/* Grid layout for the content, responsive on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: Contains the EthicsLogo and VideoCarousel */}
        <div className="shadow-lg mt-8 md:mb-8">
          {/* Ethics Logo component to display the organization's logo or ethics statement */}
          <div className="mb-4">
            <EthicsLogo />
          </div>
          {/* VideoCarousel component to display a carousel of videos */}
          <VideoCarousel />
        </div>

        {/* Right column: Contains the Bulletins section */}
        <div className="mb-8">
          {/* Bulletins component to display important announcements or updates */}
          <Bulletins />
        </div>
      </div>
    </main>
  );
};

export default Ambassadors;
