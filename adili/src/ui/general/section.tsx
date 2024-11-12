import { heading, paragraph } from '@/styles/values'

const Section: React.FC<{ title: string; content: string; listItems?: string[] }> = ({ title, content, listItems }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg">
    <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black">{title}</h1>
    <p className={paragraph}>{content}</p>
    {listItems && (
      <>
        <h2 className={heading}>Why?</h2>
        <ul className="list-disc list-inside">
          {listItems.map((item, index) => (
            <li key={index} className={paragraph}>{item}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default Section;