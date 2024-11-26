import { choices3 } from '@/data/choices'
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
    <p className={`${heading} lg:mb-8`}>Acceptance of Unwelcomed Gifts</p>

    <p className={paragraph}>
      Eve Anderson is a <strong>Market Analyst</strong> at Kenya Airways. She is attending a one-day event, 
      organized by a consultancy company. The morning and early afternoon will be devoted to 
      a seminar on future challenges in the energy markets. The rest of the day and evening 
      will be spent socializing, including attendance at a sports event being sponsored by the 
      host.  This program will update her on recent developments in the business and is a 
      good chance to network with colleagues from other companies. It is a presentation on 
      future challenges in the energy markets from one of our suppliers at Kenya Airways.
    </p>

    <p className={`${paragraph} mt-8`}>
      Eve&apos;s travel and accommodation have already been paid for by the organizer without 
      her consent. Eve was later expected to receive a Rolex watch as gift as a souvenir of 
      the event.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should Eve do?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices3.map(({ text, value }) => (
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
