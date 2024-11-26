import { choices6 } from '@/data/choices'
import { heading, paragraph } from '@/styles/values'
import { ScenarioProps } from '@/types/cases'
import { AnimateButton, AnimateScenario } from '@/ui/case-studies/animation'

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
    <p className={`${heading} lg:mb-8`}>Conflict of Interest in Insider Trading</p>

    <p className={paragraph}>
      Hanna and Titus are part of an evaluation team assessing a potential business partner 
      for KQ&apos;s acquisition of new aircraft. This partner offers strong business 
      opportunities in a new territory for KQ.
    </p>

    <p className={paragraph}>
      The acquisition price is <strong>5 billion US dollars</strong>, and the announcement is expected in the 
      next few weeks, likely boosting the company&apos;s stock value. Employees are strictly prohibited 
      from buying or selling shares until the deal is officially disclosed. However, Titus&apos;s daughter 
      has long been interested in purchasing shares in her father&apos;s company. Is it acceptable for 
      Titus to tell his daughter she can buy shares with her own money?
    </p>

    <p className={paragraph}>
      <strong>a)Yes</strong>
    </p>
    <p className={paragraph}>
      <strong>b)No</strong>
    </p>

    <p className={paragraph}>
      The correct answer is <strong>b) No</strong>. As an insider, Titus is bound by confidentiality rules, and disclosing 
      this information—even indirectly to his daughter—would be illegal and could lead to criminal charges. 
      To avoid any suspicion of insider trading or breaching confidentiality, Titus must not discuss the 
      acquisition with his daughter until it has been publicly announced. This would violate KQ&apos;s 
      <strong> Insider Information Policy</strong> and is punishable by law.
    </p>

    <p className={`${paragraph} mt-8`}>
      Now consider a situation where Hanna shares insider information with a friend, and Bernard overhears 
      the conversation. <strong>What action should Bernard take?</strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices6.map(({ text, value }) => (
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
