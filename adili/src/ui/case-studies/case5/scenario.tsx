import { heading, paragraph } from '@/styles/values'
import { AnimateButton, AnimateScenario } from '@/ui/case-studies/animation'
import { ScenarioProps } from '@/types/cases'
import { choices5 } from '@/data/choices'

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
    <p className={`${heading} lg:mb-8`}>Conflict of Interest in Recruitment Process</p>

    <p className={paragraph}>
      <strong>Angela</strong> who works in the finance department has been invited as an 
      independent panelist in the team that is interviewing candidates for <strong>Inflight Attendant </strong> 
      roles. She is briefed on her role and provided with the list of candidates that will be 
      interviewed. The interview questions are also presented to her in readiness for the 
      interviews that would begin first thing the next day.
    </p>

    <p className={`${paragraph} mt-8`}>
      As Angela reviews the documents, she notices that one of the candidates is James, a close 
      relative, she knows that he has been looking for a job for the last 5 years. His family has 
      been going through a lot of financial challenges and have even had to relocate back to their 
      upcountry home since his parents lost their jobs during the COVID 19 pandemic. This opportunity 
      could be a game changer for them.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should Angela do?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices5.map(({ text, value }) => (
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
