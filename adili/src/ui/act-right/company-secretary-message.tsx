import CompanySecretaryVideo from '@/ui/act-right/company-secretary-video'

const CompanySecretaryMessage: React.FC = () => {
  return (
    <div className="text-center pt-8 md:pt-16 lg:pt-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-6">
        Company Secretary & Director Legal and Compliance
      </h1>
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl p-4"> 
          <CompanySecretaryVideo />
        </div>
      </div>
    </div>
  );
}

export default CompanySecretaryMessage;
