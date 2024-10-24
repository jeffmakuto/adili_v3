import ValuesImage from '@/ui/home/values/values-image'
import { container, heading, paragraph } from '@/styles/values'

const CustomerObsession: React.FC = () => {
  return (
    <div className={container}>
      <ValuesImage src="/images/customer-obsession.jpg" alt="Customer Obsession" />
      <h3 className={heading}>Customer Obsession</h3>
      <p className={paragraph}>
        I commit to creating positive memorable experiences for our customers.
      </p>
    </div>
  );
};

export default CustomerObsession;
