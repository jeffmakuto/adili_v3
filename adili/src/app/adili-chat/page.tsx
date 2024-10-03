import AdiliIntro from '@/ui/adili/adili-intro'

const AdiliMain: React.FC = () => {
  return (
    <main className="flex flex-col mt-8">
      <div className="flex-grow">
        <AdiliIntro />
      </div>
    </main>
  );
};

export default AdiliMain;
