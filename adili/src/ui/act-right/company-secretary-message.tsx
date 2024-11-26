import CompanySecretaryVideo from '@/ui/act-right/company-secretary-video'

/**
 * CompanySecretaryMessage Component
 * 
 * A functional React component that displays a message and a video related to 
 * the Company Secretary & Director Legal and Compliance role. This component
 * is structured to display a centered title and a responsive video player.
 * 
 * The component is designed to be responsive with padding and typography 
 * adjustments for different screen sizes.
 *
 * @returns JSX.Element
 */
const CompanySecretaryMessage: React.FC = () => {
  return (
    <div className="text-center pt-8 md:pt-16 lg:pt-8">
      {/* Main heading */}
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-6">
        Company Secretary & Director Legal and Compliance
      </h1>

      {/* Video Section */}
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl p-4"> 
          {/* Embedding the video component */}
          <CompanySecretaryVideo />
        </div>
      </div>
    </div>
  );
}

export default CompanySecretaryMessage;
