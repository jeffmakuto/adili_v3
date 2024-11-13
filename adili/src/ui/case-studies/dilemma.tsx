import Image from 'next/image'
import EthicalDilemmasIntro from '@/ui/case-studies/intro'

const Dilemma: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-auto mb-8">
        <Image
          src="/images/dilemma.png"
          alt="Ethical Dilemma Image"
          width={958}
          height={869}
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <EthicalDilemmasIntro />
    </>
  );
};

export default Dilemma;
