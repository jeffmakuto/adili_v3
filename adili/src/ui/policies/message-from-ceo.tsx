import CEOVideo from '@/ui/policies/ceo-video'

const MessageFromCEO: React.FC = () => {
  return (
    <div className="text-center pt-8 md:pt-16 lg:pt-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-6">
        Message from the CEO
      </h1>
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl p-4"> 
          <CEOVideo />
        </div>
      </div>
    </div>
  );
}

export default MessageFromCEO;
