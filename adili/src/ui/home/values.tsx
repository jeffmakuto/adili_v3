import Safety from '@/ui/home/values/safety'
import CustomerObsession from '@/ui/home/values/customer-obession'
import Integrity from '@/ui/home/values/integrity'
import Accountability from '@/ui/home/values/accountability'

const Values: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-8">
      <h2 className="text-lg md:text-xl lg:text-3xl font-extrabold mb-8 pl-6"><em className="text-red-600">Our Core Values</em></h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Safety />
        <CustomerObsession />
        <Integrity />
        <Accountability />
      </div>
    </section>
  );
};

export default Values;
