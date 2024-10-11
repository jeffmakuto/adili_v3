import ScrollingMessage from '@/ui/header/scroll'
import Image from 'next/image'

const DefaultContent: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full p-4">
    <div className="flex items-center justify-center">
      <Image
        src="/images/conflict.JPG"
        alt="Logo"
        className="mb-4"
        width={800}
        height={600}
      />
    </div>
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-700">Welcome. How can I assist you today?</p>
      <p className="text-gray-700">Feel free to ask me anything.</p>
    </div>
  </div>
);

export default DefaultContent;
