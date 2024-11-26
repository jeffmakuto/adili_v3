import { choices1 } from '@/data/choices'
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
    <p className={`${heading} lg:mb-8`}>Accepting Hospitality from a Business partner in return for a favor</p>

    <p className={paragraph}>
      One day, <strong>Mr. Fred Mulanda</strong> and his colleagues were on a business trip. The day was hectic 
      because there was much to be covered. The trip to the USA aimed to build relations with key 
      suppliers in the market and provided Fred with a good opportunity to catch up with friends.
    </p>

    <p className={paragraph}>
      During a lunch break, Fred bumped into <strong>Mr. Green</strong>, one of the people who had submitted a bid 
      for the supply of high-value goods. Green had met Fred a couple of times at supplier review 
      meetings and was very excited to see him in the US. He invited Fred for a drink in the evening 
      with his colleagues, offering to sponsor the outing.
    </p>

    <p className={paragraph}>
      As the head of procurement in his organization, Fred had the power to influence the award of tenders. 
      However, he found himself in a dilemma about whether to attend the drinks or not. Ultimately, he 
      decided to go, thinking it might strengthen relationships.
    </p>

    <p className={paragraph}>
      As they chatted, Green pulled Fred aside and expressed his desire for the tender to be awarded to his 
      company. In a surprising turn, he mentioned that Fred would benefit from a <strong>$10,000</strong> kickback if the 
      tender was awarded to him. This unexpected offer left Fred unsure about how to respond and whether to 
      give in to the temptation.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should he do?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices1.map(({ text, value }) => (
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
