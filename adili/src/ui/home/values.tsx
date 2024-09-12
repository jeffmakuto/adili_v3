import Safety from '@/ui/home/values/safety'
import CustomerObsession from '@/ui/home/values/customer-obession'
import Integrity from '@/ui/home/values/integrity'
import Accountability from '@/ui/home/values/accountability'

const Values: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
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
