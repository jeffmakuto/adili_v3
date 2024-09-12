import Image from 'next/image'

const Accountability: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image src="/images/accountability.jpg" alt="Accountability" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-4">Accountability</h3>
      <p className="text-gray-600 mt-2">
        I take initiative and responsibility for my actions, decisions, and results.
      </p>
    </div>
  );
};

export default Accountability;
