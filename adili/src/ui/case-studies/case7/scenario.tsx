import { heading, paragraph } from '@/styles/values'
import { AnimateButton, AnimateScenario } from '@/ui/case-studies/animation'
import { ScenarioProps } from '@/types/cases'
import { choices7 } from '@/data/choices'

const Scenario: React.FC<ScenarioProps> = ({ handleChoice }) => (
  <AnimateScenario>
    <p className={`${heading} lg:mb-8`}>Compromising Safety for Personal Interest</p>

    <p className={paragraph}>
      Peter, a <strong>Maintenance Engineer</strong> in the Company is responsible for inspecting 
      and certifying the airworthiness of aircraft components. During his duties, he has certified 
      a number of airworthy aircraft components as faulty and generated purchase requisition for new 
      parts from a specific company. This trend has raised questions among the technicians who on several 
      occasions have questioned his decisions.
    </p>

    <p className={`${paragraph} mt-8`}>
      Mike, a <strong>Senior Technician</strong>, overhears an argument among the technicians, a few in favour of purchasing 
      a new component for a client’s aircraft while most stating the part does not need to be changed. As he engages them, 
      one alludes to the fact that Peter has shares in the company that he has engaged to supply the parts. 
      Peter is also famous for giving handsome gifts to technicians who executes his requests quickly and with no question. 
      It is not the first time that this allegation is being raised. When Mike examines the part that has been certified as 
      faulty, he is also of the opinion that it is in good condition.
    </p>

    <p className={`${paragraph} mt-8`}>
      <strong>
        What should Mike do?
      </strong>
    </p>

    <div className={`${paragraph} space-y-8 mt-6 lg:mt-16 mb-8`}>
      {choices7.map(({ text, value }) => (
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
