import Image from 'next/image'

const Safety: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <Image src="/images/safety.jpg" alt="Safety" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Safety</h3>
      <p className="text-gray-600 mt-2">Safety is the foundation of everything we do.</p>
    </div>
  );
};

export default Safety;
