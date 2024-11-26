import ExplainerVideo from '@/ui/adili/explainer-video'

/**
 * Explainer Component
 * 
 * This component is used to display an introduction to "Adili" with a title and an embedded explainer video. 
 * It renders a title "Meet Adili" and a video player wrapped inside a container for proper styling and alignment.
 * The `ExplainerVideo` component is used to display the explainer video on the page.
 * 
 * @returns JSX.Element
 */
const Explainer: React.FC = () => {
  return (
    <div className="text-center pt-8 md:pt-16 lg:pt-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-6">
        Meet Adili
      </h1>
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl p-4"> 
          <ExplainerVideo />
        </div>
      </div>
    </div>
  );
}

export default Explainer;
