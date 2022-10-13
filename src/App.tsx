import { FC, useEffect, useState } from 'react';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';
import './App.css';
import { CategorizedBallotData } from './types/ballotData';
import { categorizeBallotData } from './util/categorizeBallot';

const App: FC = () => {
  const [ballot, setBallot] = useState<CategorizedBallotData[] | []>([]);

  useEffect(() => {
    (async () => {
      const data = await api.getBallotData();
      if (data) {
        const ballotData = categorizeBallotData(data);
        setBallot(ballotData);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Ballot ballot={ballot} />
    </div>
  );
};

export default App;
