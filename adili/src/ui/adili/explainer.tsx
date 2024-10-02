import { heading } from '@/styles/values'
import ExplainerVideo from '@/ui/adili/explainer-video'

const Explainer: React.FC = () => {
  return (
    <div className="text-center pt-8 md:pt-16 lg:pt-8">
      <h2 className={heading}>
        How Adili Chat Works
      </h2>
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl p-4"> 
          <ExplainerVideo className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Explainer;
