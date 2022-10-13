import { FC, useEffect, useState } from 'react';
import Ballot from './Components/Ballot/Ballot';
import './App.css';
import api from './Api/Api';
import { categorizeBallotData } from './util/categorizeBallot';
import { CategorizedBallotData } from './types/ballotData';

const App: FC = () => {
  const [ballot, setBallot] = useState<CategorizedBallotData[] | undefined>(
    undefined
  );

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
      <Ballot />
    </div>
  );
};

export default App;
