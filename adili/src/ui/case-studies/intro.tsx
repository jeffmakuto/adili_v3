import { paragraph } from '@/styles/values'

/**
 * EthicalDilemmasIntro Component - Displays an introduction to ethical dilemmas.
 * 
 * @returns JSX.Element
 */
const EthicalDilemmasIntro: React.FC = () => {
  return (
    <div>
      <p className={paragraph}>
        In our daily lives and professional environments, ethical dilemmas 
        often arise when values, principles, and personal integrity come into 
        conflict. These situations challenge us to make difficult choices that 
        test our moral compass and sense of responsibility.
      </p>
      <p className={paragraph}>
        The following case studies explore scenarios where individuals 
        face conflicting paths, each with its own ethical implications. As we 
        examine these cases, consider the impact of each possible decision and 
        reflect on the values that guide your own choices in moments of uncertainty.
      </p>
      <p className={paragraph}>
        Through these exercises, we aim to strengthen ethical awareness and enhance 
        the capacity for integrity in decision-making. By engaging with these scenarios, 
        we hope to foster a deeper understanding of how to navigate the ethical challenges 
        we encounter both personally and professionally.
      </p>
    </div>
  );
};

export default EthicalDilemmasIntro;
