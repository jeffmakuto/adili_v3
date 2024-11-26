import { choices2 } from '@/data/choices'
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
    <p className={`${heading} lg:mb-8`}>Accepting a gift/bribe in return for a favour</p>

    <p className={paragraph}>
      A well-dressed lady approaches the check-in counter that Jennifer is 
      manning and presents her travel documents.
    </p>

    <p className={paragraph}>
      The lady has 5 bags and is traveling in economy class. As Jennifer inspects her passport, 
      a <strong>$100</strong> bill falls out of the passport, and she promptly returns it to Ms. Amanda, the guest.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>Amanda:</strong> &quot;No, that is for you!&quot;
    </p>

    <p className={paragraph}>
      <strong>Jennifer:</strong> &quot;For what?&quot;
    </p>

    <p className={paragraph}>
      <strong>Amanda:</strong> &quot;You’re a very kind lady, and I know you 
      can find for me a vacant seat in business class. Here is my luggage.&quot;
    </p>

    <p className={`${paragraph} mt-8`}>
      As she continues to place her bags on the conveyer belt, Jennifer knows 
      that an upgrade will cost <strong>$300</strong>, and she will need to add another <strong>$250</strong> for the extra bags.
    </p>

    <p className={paragraph}>
      Amanda is fidgeting in her purse and extends her clenched fist towards Jennifer’s hand 
      with a dollar bill popping out.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should Jennifer do?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
    {choices2.map(({ text, value }) => (
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
