import Image from 'next/image'

const CustomerObsession: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <Image src="/images/customer obsession.jpg" alt="Customer Obsession" width={200} height={200} />
      <h3 className="text-2xl font-semibold mt-4 text-red-600">Customer Obsession</h3>
      <p className="text-gray-600 mt-2">
        I commit to creating positive memorable experiences for our customers.
      </p>
    </div>
  );
};

export default CustomerObsession;
