import { FC } from 'react';
import styles from '../../styles/Ballot.module.css';
import { CategorizedBallotData } from '../../types/ballotData';
import Category from '../Category/Category';

interface BallotProps {
  ballot: CategorizedBallotData[];
}

const Ballot: FC<BallotProps> = ({ ballot }) => {
  return (
    <div className={styles.ballot}>
      {ballot.length > 0 &&
        ballot.map((category) => (
          <Category
            category={category.category}
            key={category.id + category.category}
            nominees={category.items}
          />
        ))}
    </div>
  );
};

export default Ballot;
