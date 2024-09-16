import Image from 'next/image'

const Accountability: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <Image src="/images/accountability.jpg" alt="Accountability" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Accountability</h3>
      <p className="text-gray-600 mt-2">
        I take initiative and responsibility for my actions, decisions, and results.
      </p>
    </div>
  );
};

export default Accountability;
