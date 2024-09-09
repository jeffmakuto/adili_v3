import ScrollingMessage from '@/ui/header/scroll';
import Nav from '@/ui/navigation/nav';

export default function Header() {
  return (
    <header>
      <div className="fixed top-0 w-full flex flex-col z-50 bg-white">
        <ScrollingMessage />
      </div>
      <div className="mt-16">
        <Nav />
      </div>
    </header>
  );
}
