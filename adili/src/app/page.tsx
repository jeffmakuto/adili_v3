/**
 * Home Component
 *
 * This component serves as the homepage of the application and includes the main 
 * sections that make up the homepage layout. It renders the `Hero`, `RedLine`, and `Values`
 * components in a structured order.
 *
 * @returns {JSX.Element} - The rendered homepage layout.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */

import Hero from '@/ui/home/hero'
import RedLine from '@/ui/home/red-line'
import Values from '@/ui/home/values'

const Home: React.FC = () => {
  return (
    <main className="mt-8">
      {/* Render the Hero section */}
      <Hero />
      
      {/* Render the RedLine section */}
      <RedLine />
      
      {/* Render the Values section */}
      <Values />
    </main>
  );
};

export default Home;
