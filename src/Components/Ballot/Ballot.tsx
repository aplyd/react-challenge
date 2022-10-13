import { FC } from 'react';
import { CategorizedBallotData } from '../../types/ballotData';
import Category from '../Category/Category';

interface BallotProps {
  ballot: CategorizedBallotData[];
}

const Ballot: FC<BallotProps> = ({ ballot }) => {
  return (
    <div className="ballot-container">
      {ballot.length > 0 &&
        ballot.map((category) => (
          <Category
            category={category.category}
            nominees={category.items}
            key={category.id + category.category}
          />
        ))}
    </div>
  );
};

export default Ballot;
