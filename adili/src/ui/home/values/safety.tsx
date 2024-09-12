import Image from 'next/image'

const Safety: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image src="/images/safety.jpg" alt="Safety" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-4">Safety</h3>
      <p className="text-gray-600 mt-2">Safety is the foundation of everything we do.</p>
    </div>
  );
};

export default Safety;
