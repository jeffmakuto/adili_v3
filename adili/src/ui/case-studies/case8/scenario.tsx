import { heading, paragraph } from '@/styles/values'
import { AnimateButton, AnimateScenario } from '@/ui/case-studies/animation'
import { ScenarioProps } from '@/types/cases'
import { choices8 } from '@/data/choices'

const Scenario: React.FC<ScenarioProps> = ({ handleChoice }) => (
  <AnimateScenario>
    <p className={`${heading} lg:mb-8`}>Conflict of Interest in Procurement Process</p>

    <p className={paragraph}>
      Peter, the <strong>Head of Procurement in the Finance Department</strong> at KQ is responsible for managing 
      all procurement processes and vendor payments. Uknown to KQ, one of the bidders is his sister 
      Mary, who owns a Supply Chain Company. Peter uses his position to secure contracts for Mary&apos;s company
    </p>

    <p className={`${paragraph} mt-8`}>
      During the delivery of the products, Tonny notices that the products are of sub-standard quality. He also 
      recalls meeting Mary at a KQ family fun day where Peter had introduced her as his sister.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should Tonny do?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices8.map(({ text, value }) => (
        <AnimateButton
          key={value} 
          onClick={() => handleChoice(value)} 
          text={text}
          value={value} 
        />
      ))}
    </div>
  </AnimateScenario>
);

export default Scenario;
