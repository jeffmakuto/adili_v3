import ReturnToTopButton from '@/ui/buttons/return-to-top'

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-[#0d0d0d] text-white relative">
      <div className="max-w-5xl px-4 mx-auto flex flex-col items-center">
        <p className="text-center text-xs sm:text-sm mb-2">
          &copy; {new Date().getFullYear()} KQ Ethics & Integrity. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-6 mb-4">
          <a href="#" className="text-red-600 hover:underline mb-2 md:mb-0 text-xs sm:text-sm">Privacy Policy</a>
          <a href="#" className="text-red-600 hover:underline mb-2 md:mb-0 text-xs sm:text-sm">Terms of Service</a>
          <a href="#" className="text-red-600 hover:underline text-xs sm:text-sm">Cookie Policy</a>
        </div>
        <ReturnToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
