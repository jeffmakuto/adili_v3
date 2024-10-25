import { paragraph } from '@/styles/values'
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
    <div className="flex flex-col items-center justify-center px-4 lg:px-8">
      <p className={paragraph}>
        Welcome. Let’s explore questions around ethics and 
        integrity together—what’s on your mind?
      </p>
    </div>
  </div>
);

export default DefaultContent;
