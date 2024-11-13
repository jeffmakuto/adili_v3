import { heading, paragraph } from '@/styles/values'
import { AnimateButton, AnimateScenario } from '@/ui/case-studies/animation'
import { ScenarioProps } from '@/types/cases'
import { choices9 } from '@/data/choices'

const Scenario: React.FC<ScenarioProps> = ({ handleChoice }) => (
  <AnimateScenario>
    <p className={`${heading} lg:mb-8`}>Reporting Misconduct</p>

    <p className={paragraph}>
      One Monday morning David is called by his manager/ Supervisor into his office to discuss a 
      customer account that he was handling the previous week and tells him that the customer 
      has complained about the charges on the bill.
    </p>

    <p className={`${paragraph} mt-8`}>
      The customer pointed out to an aircraft part that has been charged in the bill costing 
      <strong> USD 5,500</strong> that they are sure was never fitted in the aircraft. David’s 
      manager asks him to remove the part from the bill and not to tell anyone about it and 
      sent the revised bill to the customer. David looks at the job card and the work 
      schedules and confirm that the part was never fitted in the client&apos;s aircraft, 
      but the stores clerk confirms the part was issued out under the customer’s job card. 
      The hangar has CCTV cameras, and it would have captured who took the part and solve 
      the mystery of the missing part.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should David do in this situation?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices9.map(({ text, value }) => (
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
