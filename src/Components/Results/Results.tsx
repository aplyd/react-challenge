import { FC } from 'react';
import styles from '../../styles/Results.module.css';
import Title from '../general/Title/Title';

interface ResultsProps {
  userSelection: { [key: string]: string };
}

const Results: FC<ResultsProps> = ({ userSelection }) => {
  return (
    <div>
      {Object.entries(userSelection).map(([category, selection]) => {
        return (
          <div key={`result-${category}`}>
            <Title className="results" headingLevel={3} text={category} />
            <p className={styles.selection}>{selection}test</p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
