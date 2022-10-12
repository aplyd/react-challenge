import { FC, useEffect, useState } from 'react';
import Ballot from './Components/Ballot/Ballot';
import './App.css';
import api from './Api/Api';
import { SearchResult } from './types/omdbResponse';

const App: FC = () => {
  const [ballot, setBallot] = useState<SearchResult[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const data = await api.getBallotData();
      setBallot(data);
    })();
  }, []);

  return (
    <div className="App">
      <Ballot />
    </div>
  );
};

export default App;
