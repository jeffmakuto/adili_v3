import Image from 'next/image'

const EthicsHotlineImage: React.FC = ({ }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        src='/images/reporting-banner.jpeg'
        alt='Act Right Speak Up Image'
        width={794}
        height={76}
        priority
      />
    </div>
  );
};

export default EthicsHotlineImage;
