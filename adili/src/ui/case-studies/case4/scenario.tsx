import { heading, paragraph } from '@/styles/values'
import { AnimateButton, AnimateScenario } from '@/ui/case-studies/animation'
import { ScenarioProps } from '@/types/cases'
import { choices4 } from '@/data/choices'

/**
 * Scenario Component - Displays a scenario to the user, allows them to choose a response 
 * and pass their choice to a handler function.
 * 
 * @param {Function} handleChoice - Function to handle the user's selected choice.
 * 
 * @returns JSX.Element
 */
const Scenario: React.FC<ScenarioProps> = ({ handleChoice }) => (
  <AnimateScenario>
    <p className={`${heading} lg:mb-8`}>Receiving Inappropriate Gifts</p>

    <p className={paragraph}>
      James, a <strong>Senior Manager</strong> at Kenya Airways, was attending an important office briefing 
      when he received a call from Michael, an outstation <strong>Grounds Services Agent</strong> <strong>(</strong>GSA<strong>)</strong> based 
      in Amsterdam. Michael informed James that he had a gift for him and wanted to know the 
      best way to arrange its delivery. Given that it was during the month of Ramadan, James 
      reasonably assumed the gift would be something modest, such as dates or a similar item, 
      typically valued at less than <strong>KES 1,000</strong>, as is customary.
    </p>

    <p className={`${paragraph} mt-8`}>
      James advised Michael to leave the gift at the office for him to collect upon his return 
      and informed him of a colleague who could receive it in his absence. Due to other commitments 
      following the meeting, James was unable to return to the office that day. To his surprise, 
      when he arrived the next day, he found Michael there, who had returned to personally deliver the gift. 
      To James&apos; astonishment, the gift turned out to be <strong>KES 700,000</strong> in cash.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should James do in this situation?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices4.map(({ text, value }) => (
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
