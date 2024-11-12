import Hero from '@/ui/home/hero'
import RedLine from '@/ui/home/red-line'
import Values from '@/ui/home/values'

const Home: React.FC = () => {
  return (
    <main className="mt-8">
      <Hero />
      <RedLine />
      <Values />
    </main>
  );
};

export default Home;
