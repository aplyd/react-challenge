import { FC, useEffect, useState } from 'react';
import api from './Api/Api';
import Ballot from './Components/Ballot/Ballot';
import './styles/reset.css';
import './styles/main.css';
import Title from './Components/general/Title/Title';
import styles from './styles/App.module.css';
import { CategorizedBallotData } from './types/ballotData';
import { categorizeBallotData } from './util/categorizeBallot';

const App: FC = () => {
  const [ballot, setBallot] = useState<CategorizedBallotData[] | []>([]);

  useEffect(() => {
    let shouldUpdate = true;

    (async () => {
      await api.getBallotData().then((data) => {
        if (data && shouldUpdate) {
          const ballotData = categorizeBallotData(data);
          setBallot(ballotData);
        }
      });

      return () => {
        shouldUpdate = false;
      };
    })();
  }, []);

  return (
    <div className={styles.app}>
      <Title className="app" headingLevel={1} text="Awards 2022" />
      <Ballot ballot={ballot} />
    </div>
  );
};

export default App;
