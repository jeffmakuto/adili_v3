import Image from 'next/image'

const Integrity: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image src="/images/integrity.jpg" alt="Integrity" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-4">Integrity</h3>
      <p className="text-gray-600 mt-2">
        I shall be ethical and trustworthy in all my engagements and treat each person with respect.
      </p>
    </div>
  );
};

export default Integrity;
